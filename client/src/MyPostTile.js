import React from "react";
import "./Styling/MyPostTile.css"


function MyPostTile({post}){
   
    return(
        <div >
            <div className="content-wrapper"> 
        <p><strong>When?</strong> {post.date}</p>
        <p><strong> What?</strong> {post.summary}</p>
            </div>
        </div>
    )
}

export default MyPostTile