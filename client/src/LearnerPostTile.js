import React from "react";

function LearnerPostTile({post}){
    
    const thoughtBubbleStyle = {
        position: "relative",
        backgroundColor: "#f0f0f0",
        padding: "15px",
        marginBottom: "20px",
        width: "200px",
        borderRadius: "50px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      };
    
      const triangleStyle = {
        content: "",
        position: "absolute",
        bottom: "-25px",
        left: "50%",
        width: "0",
        height: "0",
        marginLeft: "-10px",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        borderTop: "25px solid #f0f0f0",
      };    
    return(
        <div style={thoughtBubbleStyle}>
        <p><strong>Who?</strong> {post.user.username} </p>
        <p><strong>When?</strong> {post.date}</p>
        <p><strong> What?</strong> {post.summary}</p>
        <div style={triangleStyle} />
        </div>
    )
}

export default LearnerPostTile