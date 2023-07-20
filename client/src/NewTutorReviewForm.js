import React, {useState} from "react";

function NewTutorReviewForm(){
    const [reviewSummary, setReviewSummary] = useState("")

    const handleReviewFormSubmit = (e) => {
        e.preventDefault();
        // fetch("/tutor")
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
    </form>
    </>
)
}

export default NewTutorReviewForm