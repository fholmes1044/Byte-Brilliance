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
        const data = JSON.parse(e.data);
        if (data.type === "ping") return;
        if(data.type === "welcome") return;
        if(data.type === "confirm_subscription") return;

        const message = JSON.parse(data.message);
        setMessages([...messages, message])

       
        // try {
        //   const message = JSON.parse(data);
        //   addMessage(message);
        // } catch (error) {
        //   console.error("Error parsing JSON data:", error);
        // }
      };

      const addMessage = message => {
        setMessages([...messages, message])
      }

    return(
        <div id="container">
            <h3> Chat </h3>
            <ChatDisplay messages={ messages }  isTyping={ isTyping }/>
            <ChatForm addMessage={ addMessage} setIsTyping={ setIsTyping } />
        </div>
    )
}

export default ChatDashboard