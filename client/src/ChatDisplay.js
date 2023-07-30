import ChatMessage from './ChatMessage'
import "./Chat.css"

function ChatDisplay({ messages, isTyping }){
    const chatMessages = messages.map( message => <ChatMessage key={ message.id } chat={ message }  />)
    return(
        <div id="display">
            { chatMessages }
            { isTyping ? <p>Someone is typing...</p> : null }
        </div>
    )
}

export default ChatDisplay