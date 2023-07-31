import React, { useState, useEffect, useContext} from "react";
import { UserContext } from "./context/user";
import NewPostForm from "./NewPostForm";
import LearnerPostTile from "./LearnerPostTile";
import "./Styling/AllPosts.css"

function AllPostsDisplay(){
    const[allLearnerPosts, setAllLearnerPosts] = useState([])
    const { user, errors } = useContext(UserContext);

    useEffect(() =>{
        fetch("/learnerposts")
        .then((r) => r.json())
        .then((learnerPost) => setAllLearnerPosts(learnerPost))
        .catch((err) => {
            console.error('Error making request: ', err);
        });
      }, []);
      
    if (!user || Object.keys(user).length === 0) {
      return <p style={{background:"#f79ea3"}}>{errors} Please login or signup.</p>;
    }

return(
    <div className="all-posts-container">
    <h2>All Learner Posts</h2>
    <p>What did you learn?</p>
    <NewPostForm allLearnerPosts={allLearnerPosts} setAllLearnerPosts={setAllLearnerPosts}/>
    <h2>Check out all the User Learning</h2>
    <div className="bubble-container">
        {allLearnerPosts.map((post) => (
          <LearnerPostTile key={post.id} post={post} />
        ))}
      </div>
    </div>
)
}

export default AllPostsDisplay; 