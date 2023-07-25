import React, {useState, useContext} from "react";
import { UserContext } from "./context/user";

function SessionReviewForm({meetingId}){
    const[sessionRating, setSessionRating] = useState("")
    const[sessionSummary, setSessionSummary] = useState("")
    const {user, errors, setUser, setErrors} = useContext(UserContext)

   
    const addNewSessionReview = (newReview) => {
        setUser({ ...user, session_reviews: [...user.session_reviews, newReview]});
    }
    

    const handleSessionReviewFormSubmit = (e) => {
        e.preventDefault();

        const sessionFormData = {
            meeting_id: meetingId,
            rating: sessionRating,
            comment: sessionSummary,
        }
   
          fetch("/sessionreviews", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sessionFormData),
        })
        .then((response) => response.json())
        .then((data) => {
            if(!data.errors){
                setSessionRating("");
                setSessionSummary("");
                addNewSessionReview(data)
                setErrors([]);
            }else{
                const sessionReviewFormErrorList = data.errors.map(error => <li key={error}>{error}</li> )
                setErrors(sessionReviewFormErrorList)
            }
        })
    }
    return(
        <>
        <form onSubmit={handleSessionReviewFormSubmit}>
        <label htmlFor="sessionRating">Rate your session: </label>
            <select
            id="sessionRating"
            value={sessionRating}
            onChange={(e) => setSessionRating(e.target.value)}
            >
                <option value="">Please select a rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            
            </select><br/>
            {/* <label>Rate the session 1-5: </label>
            <input
            type="number"
            id="sessionRating"
            value={sessionRating}
            onChange= {(e) => setSessionRating(e.target.value)}
            /><br/> */}
            <label>Session Notes: </label>
            <input
            type="text"
            id="sessionSummary"
            value={sessionSummary}
            onChange= {(e) => setSessionSummary(e.target.value)}
            /><br/>
            
        <input type="submit"/>
        </form>
        </>
    )
}

export default SessionReviewForm