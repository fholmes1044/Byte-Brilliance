import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './context/user';

const ChatMessage = ({ chat}) => {
  // console.log("chat", chat)
  
  const { user } = useContext(UserContext);
  // console.log("user", user)
  return (
    <div className="message"><span style={{color: chat.user.id == user.id ? "blue" : "red"}}>{chat.user.username}:</span> { chat.content }</div>
  )
}

export default ChatMessage
