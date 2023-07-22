import React, {useState, useContext} from "react";
import { UserContext } from "./context/user";
import { useParams } from "react-router-dom";

function NewTutorReviewForm({tutor, setTutor}){
    const [reviewSummary, setReviewSummary] = useState("")
    const { tutorId } = useParams();
    const {errors, setErrors, setUser, user} = useContext(UserContext)

    const addNewTutorReview = (newReview ) => {
        console.log("new", newReview )
        setTutor({...tutor, tutor_reviews: [...tutor.tutor_reviews, newReview]})
        setUser({ ...user, tutor_reviews: [...user.tutor_reviews, newReview]});
    }

    const handleReviewFormSubmit = (e) => {
        e.preventDefault();
    
        const formData = {
            summary: reviewSummary,
            tutor_id: tutorId,
        }
   
          fetch("/tutorreviews", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
            if(!data.errors){
                setReviewSummary("");
                addNewTutorReview(data);
                setErrors([]);
            }else{
                const tutorReviewFormErrorList = data.errors.map(error => <li key={error}>{error}</li> )
                setErrors(tutorReviewFormErrorList)
            }
        })
    }

return(
    <>
    <form onSubmit={handleReviewFormSubmit}>
        <label>Your Review: </label>
        <input 
        type="text"
        id= "reviewSummary"
        value={reviewSummary}
        onChange= {(e) => setReviewSummary(e.target.value)}
        /><br/>
        <input type="submit"/>
    </form>
    </>
)
}

export default NewTutorReviewForm