import React from "react";

function LearnerPostTile({post}){

    return(
        <>
        <p><strong>Who?</strong> {post.user.username} </p>
        <p><strong>When?</strong> {post.date}</p>
        <p><strong> What?</strong> {post.summary}</p>
        
        </>
    )
}

export default LearnerPostTile