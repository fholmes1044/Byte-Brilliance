import React, {useContext} from "react";
import ChatMessage from './ChatMessage'
import "./Chat.css"
import { UserContext } from "./context/user";

function ChatDisplay({ messages, isTyping }){
// console.log(messages)
const {user} = useContext(UserContext)

    const chatMessages = messages.map( message => <ChatMessage key={ message.id } chat={ message }  />)
    return(
        <div id="display">
            { chatMessages }
            { isTyping ? <p>Someone is typing...</p> : null }
        </div>
    )
}

export default ChatDisplay