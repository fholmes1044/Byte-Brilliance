import React, {useState, useContext} from "react";
import { UserContext } from "./context/user";

function NewPostForm({allLearnerPosts, setAllLearnerPosts}){
    const [postSummary, setPostSummary] = useState("");
    const [postDate, setPostDate] = useState("");
    const {user, setUser, errors, setErrors} = useContext(UserContext)

    const addNewLearnerPost = (newPost) => {
        setAllLearnerPosts([...allLearnerPosts, newPost])
        setUser({ ...user, learner_posts: [...user.learner_posts, newPost]});
    }

    const handlePostFormSubmit = (e) => {
        e.preventDefault()

        const postFormData = {
            summary: postSummary,
            date: postDate,
        }
   
          fetch("/learnerposts", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postFormData),
        })
        .then((response) => response.json())
        .then((data) => {
            if(!data.errors){
                setPostSummary("");
                addNewLearnerPost(data);
                setErrors([]);
            }else{
                const postReviewFormErrorList = data.errors.map(error => <li key={error}>{error}</li> )
                setErrors(postReviewFormErrorList)
            }
        })
    }
    return(
        <>
        <form onSubmit={handlePostFormSubmit}>
            <input
            type="text"
            id="postSummary"
            value={postSummary}
            onChange= {(e) => setPostSummary(e.target.value)}
        /><br/>
         <input
            type="date"
            id="postSummaryDate"
            value={postDate}
            onChange= {(e) => setPostDate(e.target.value)}
        /><br/>
        <input type="submit"/>
        </form>
        {errors}
        </>
    )

}

export default NewPostForm;