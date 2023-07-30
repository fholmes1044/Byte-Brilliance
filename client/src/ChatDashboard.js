import React, {useState, useEffect, useContext} from "react";
import { UserContext } from "./context/user";
import ChatDisplay from "./ChatDisplay";
import ChatForm from "./ChatForm";

function ChatDashboard(){
    const [messages, setMessages] = useState([])
    const [isTyping, setIsTyping] = useState(false);
    const {ws} = useContext(UserContext)

      useEffect(() => {
        
        fetch("/messages")
          .then((resp) => resp.json())
          .then((data) => setMessages(data));
    
        ws.onmessage = (event) => {
          const data = JSON.parse(event.data);
          if (data.type === "ping") return;
          if (data.type === "welcome") return;
          if (data.type === "confirm_subscription") return;
    
          const message = JSON.parse(data.message);
          setMessages((prevMessages) => [...prevMessages, message]);
        };
      }, [])
    
   
    
    return(
        <div id="container">
            <h3> Chat </h3>
            <ChatDisplay messages={ messages }  isTyping={ isTyping }/>
            <ChatForm  setIsTyping={ setIsTyping } />
        </div>
    )
}

export default ChatDashboard