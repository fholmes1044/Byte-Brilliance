import React, {useContext, useState} from "react";
import { UserContext } from "./context/user";
import MyPostTile from "./MyPostTile";
import EditPostForm from "./EditPostForm";
import "./Styling/MyPostTile.css"

function AllUserPostsDisplay(){
   const {user, setUser, errors} = useContext(UserContext) 
    const [editFormId, setEditFormId] = useState(null);
   
if (Object.keys(user).length === 0){
  return<p> {errors}, Please Login or Signup </p>
}

if(user.learner_posts === undefined){
    return <p>...Loading</p>
    }
    else if(user.learner_posts.length ===0){
        return <p>You have no posts yet</p>
    }
    const handleDeletePost= (id) => {
        fetch(`/learnerposts/${id}`, {
            method: "DELETE"
        }).then((response) => {
            if (response.ok){
                setUser(() => {
                    const deletedPost = user.learner_posts.find((post) =>  post.id === id);
                    const updatedPosts = user.learner_posts.filter((post) => post.id !== deletedPost.id);
                    const updatedUser = { ...user, learner_posts: updatedPosts};
                    return updatedUser
                })
            }
        })
    }

    const userPostsMap = user.learner_posts.map((post) => (
        <div key={post.id} className="my-post-tile">
          <MyPostTile post={post} />
          {editFormId === post.id ? (
            <EditPostForm
              post={post}
              setEditFormId={setEditFormId}
              handleDeletePost={handleDeletePost}
              summary={post.summary}
              
            />
          ) : (
            <>
              <button onClick={() => setEditFormId(post.id)}>Edit</button>
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            </>
          )}
        </div>
      ));

    return(
        <>
        <h2>Check out Your Learning</h2>
         {userPostsMap}
        </>
    )
}

export default AllUserPostsDisplay