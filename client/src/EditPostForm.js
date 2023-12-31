import React, {useState, useContext} from "react";
import { UserContext } from "./context/user";

function EditPostForm( {post, setEditFormId, handleDeletePost, summary} ){
    const [updatedSummary, setUpdatedSummary] = useState(summary)
    const {setUser} = useContext(UserContext)

    const handleUpdatePost = () => {
        const updatedPost = {
            ...post,
            summary: updatedSummary,
          };

          fetch(`/learnerposts/${post.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPost),
          }).then((response) => {
            if (response.ok) {
              response.json().then((updatedPostData) => {
                setUser((prevUser) => ({
                  ...prevUser,
                  learner_posts: prevUser.learner_posts.map((post) =>
                    post.id === updatedPostData.id ? updatedPostData : post
                  ),
                }));
          setEditFormId(null);
        });
      }
    });
    }
    return(
        <>
        <input
        type="text"
        value={updatedSummary}
        onChange={(e) => setUpdatedSummary(e.target.value)}
      />
      <button onClick={handleUpdatePost}>Update</button>
      <button onClick={() => setEditFormId(null)}>Cancel</button>
      <button onClick={() => handleDeletePost(post.id)}>Delete</button>
        </>
    )
}

export default EditPostForm