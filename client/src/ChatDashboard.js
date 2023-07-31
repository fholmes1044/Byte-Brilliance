import React, {useState, useEffect, useContext} from "react";
import { UserContext } from "./context/user";
import ChatDisplay from "./ChatDisplay";
import ChatForm from "./ChatForm";

function ChatDashboard(){
    const [messages, setMessages] = useState([])
    const [isTyping, setIsTyping] = useState(false);
    const {ws,errors, user} = useContext(UserContext) 

      useEffect(() => {
      
        fetch("/messages")
          .then((resp) => resp.json())
          .then((data) => setMessages(data));
    
        ws.onmessage = (event) => {
          const data = JSON.parse(event.data);
          
          if (data.type === "ping") return;
          if (data.type === "welcome") return;
          if (data.type === "confirm_subscription") return;
          
          const message = data.message ? JSON.parse(data.message) : null;

          setMessages((prevMessages) => [...prevMessages, message]);
        };
        
      }, [messages])
    
   
      const isUserLoggedIn = user && Object.keys(user).length > 0;
    return(
      <div id="container">
      {isUserLoggedIn ? (
        <>
          <h3> Talk Tech With New People</h3>
          <ChatDisplay messages={messages} isTyping={isTyping} />
          <ChatForm setIsTyping={setIsTyping} />
        </>
      ) : (
        <p style={{background:"#f79ea3"}}>{errors} Please login or signup.</p>
      )}
    </div>
    )
}

export default ChatDashboard