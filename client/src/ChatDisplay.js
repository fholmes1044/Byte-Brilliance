import React from "react";
import ChatMessage from './ChatMessage'
import "./Chat.css"

function ChatDisplay({ messages, user, isTyping }){
console.log(messages)

    // const chatMessages = messages.map( message => <ChatMessage key={ message.id } chat={ message } user={ user } />)
    return(
        <div id="display">
            {/* { chatMessages } */}
            { isTyping ? <p>Someone is typing...</p> : null }
        </div>
    )
}

export default ChatDisplay