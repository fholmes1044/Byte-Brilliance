import React, {useState, useContext} from "react";
import { UserContext } from "./context/user";

function SessionReviewForm({meetingId}){
    const[sessionRating, setSessionRating] = useState("")
    const[sessionSummary, setSessionSummary] = useState("")
    const {user, errors, setErrors} = useContext(UserContext)

    const addNewSessionReview = (newReview) => {

    }
    

    const handleSessionReviewFormSubmit = (e) => {
        e.PreventDefault()

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
            <label>Rate the session 1-5: </label>
            <input
            type="number"
            id="sessionRating"
            value={sessionRating}
            onChange= {(e) => setSessionRating(e.target.value)}
            /><br/>
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