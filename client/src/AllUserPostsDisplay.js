import React, {useContext} from "react";
import { UserContext } from "./context/user";
import MyPostTile from "./MyPostTile";


function AllUserPostsDisplay(){
   const {user} = useContext(UserContext) 

   if(user.learner_posts === undefined){
    return <p>...Loading</p>
    }

const userPostsMap = user.learner_posts.map((post) => (
    <MyPostTile key={post.id} post={post}/>
))
    return(
        <>
        Check out Your Learning
         {userPostsMap}
        </>
    )
}

export default AllUserPostsDisplay