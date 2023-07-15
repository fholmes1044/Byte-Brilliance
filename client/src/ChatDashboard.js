import React, {useState, useEffect, useContext} from "react";
import { UserContext } from "./context/user";
import ChatDisplay from "./ChatDisplay";
import ChatForm from "./ChatForm";

function ChatDashboard(){
    const [messages, setMessages] = useState([])
    const [isTyping, setIsTyping] = useState(false);
    const {user, ws} = useContext(UserContext)

    useEffect(() => {
        fetch("/messages")
          .then(resp => resp.json())
          .then(data => setMessages(data))
      }, [])

      ws.onmessage = e => {
        console.log(e.data)
      }
      const addMessage = message => {
        setMessages([...messages, message])
      }

    return(
        <div id="container">
            <h3> Chat </h3>
            <ChatDisplay messages={ messages } user={ user } isTyping={ isTyping }/>
            <ChatForm addMessage={ addMessage } setIsTyping={ setIsTyping } />
        </div>
    )
}

export default ChatDashboard