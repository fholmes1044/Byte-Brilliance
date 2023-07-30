import React, { useState, useEffect} from "react";
import NewPostForm from "./NewPostForm";
import LearnerPostTile from "./LearnerPostTile";
import "./Styling/AllPosts.css"

function AllPostsDisplay(){
    const[allLearnerPosts, setAllLearnerPosts] = useState([])

    useEffect(() =>{
        fetch("/learnerposts")
        .then((r) => r.json())
        .then((learnerPost) => setAllLearnerPosts(learnerPost))
        .catch((err) => {
            console.error('Error making request: ', err);
        });
      }, []);
      

    if(allLearnerPosts.length === 0 || allLearnerPosts === undefined){
        return <p>There are no Learner Posts</p>
        }

    // const allLearnerPostsMap = allLearnerPosts.map((post) => (
    //     <LearnerPostTile key={post.id} post={post}/>
    // ))
return(
    <div className="all-posts-container">
    <h2>All Learner Posts</h2>
    <p>What did you learn?</p>
    <NewPostForm allLearnerPosts={allLearnerPosts} setAllLearnerPosts={setAllLearnerPosts}/>
    <h2>Check out all the User Learning</h2>
    {/* {allLearnerPostsMap} */}
    <div className="bubble-container">
        {allLearnerPosts.map((post) => (
          <LearnerPostTile key={post.id} post={post} />
        ))}
      </div>
    </div>
)
}

export default AllPostsDisplay; 