import React, {useContext} from "react";
import { UserContext } from "./context/user";
import NewPostForm from "./NewPostForm";
import LearnerPostTile from "./LearnerPostTile";

function AllPostsDisplay(){
    const {user} = useContext(UserContext)

    if(user.learner_posts === undefined){
        return <p>...Loading</p>
        }

    const userPostsMap = user.learner_posts.map((post) => (
        <LearnerPostTile key={post.id} post={post}/>
    ))
return(
    <>
    <h2>All Learner Posts</h2>
    <p>What did you learn?</p>
    <NewPostForm/>
    <h2>Check out all the User Learning</h2>
    {userPostsMap}
    </>
)
}

export default AllPostsDisplay; 