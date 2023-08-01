import React, { useContext } from 'react';
import { UserContext } from './context/user';

const ChatMessage = ({ chat}) => {
  
  const { user } = useContext(UserContext);
 
  return (
    <div className="message"><span style={{color: chat.user.id == user.id ? "blue" : "red"}}>{chat.user.username}:</span> { chat.content }</div>
  )
}

export default ChatMessage
