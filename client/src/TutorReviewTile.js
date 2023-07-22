import React from "react";

function TutorReviewTile({tutorReview}){
    return(
        <>
        <h4>User: {tutorReview.user.full_name} </h4>
        <p><strong>Summary:</strong>{tutorReview.summary}</p>
        </>
    )
}

export default TutorReviewTile