import React, {useContext, useState} from "react";
import { UserContext } from "./context/user";
import MyPostTile from "./MyPostTile";
import EditPostForm from "./EditPostForm";

function AllUserPostsDisplay(){
   const {user, setUser} = useContext(UserContext) 
    const [editFormId, setEditFormId] = useState(null);
    
if(user.learner_posts === undefined){
    return <p>...Loading</p>
    }
    const handleDeletePost= () => {

    }

    const userPostsMap = user.learner_posts.map((post) => (
        <div key={post.id}>
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

   

   
// const userPostsMap = user.learner_posts.map((post) => (
//     <MyPostTile key={post.id} post={post}/>
// ))
    return(
        <>
        Check out Your Learning
         {userPostsMap}
        </>
    )
}

export default AllUserPostsDisplay