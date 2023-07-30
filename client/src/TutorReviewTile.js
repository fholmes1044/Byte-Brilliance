import React from "react";
import "./Styling/TutorReviewTile.css"

function TutorReviewTile({tutorReview}){
    return(
        <div className="tutor-review-card">
        <h4>User: {tutorReview.user.full_name} </h4>
        <p><strong>Summary:</strong>{tutorReview.summary}</p>
        </div>
    )
}

export default TutorReviewTile