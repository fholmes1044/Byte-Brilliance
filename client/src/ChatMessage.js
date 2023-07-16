// import React, { useContext } from 'react';
// import { UserContext } from "./context/user";

// const ChatMessage = ({ chat }) => {
//   const { user } = useContext(UserContext);

//   const isCurrentUser = chat.user_id === user.id;
//   const colorStyle = { color: isCurrentUser ? "blue" : "red" };

//   return (
//     <div className="message">
//       <span style={colorStyle}>
//         {isCurrentUser ? "You" : user.username}:
//       </span>{" "}
//       {chat.content}
//     </div>
//   );
// };

// export default ChatMessage;


import React, {useContext} from 'react'
import { UserContext } from "./context/user";

const ChatMessage = ({ chat }) => {
  const {user} = useContext(UserContext)
  // console.log("USER", user)
  // console.log("CHAT", chat)
  // const chatUsername = user.find((userid) => userid.id === chat.user_id)
  // console.log("CU", chatUsername)
  const isCurrentUser = chat.user_id === user.id;
  const colorStyle = { color: isCurrentUser ? "blue" : "red" };
  return (
    <div className="message">
       <div className="message">
      <span style={colorStyle}>
        {isCurrentUser ? "You" : chat.username}:
      </span>{" "}
      {chat.content}
    </div>
      </div>
  )
}

export default ChatMessage
// // {chat.user.username}