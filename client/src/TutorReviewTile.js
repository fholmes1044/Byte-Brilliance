import React from "react";

function TutorReviewTile({tutorReview}){
    console.log("TR", tutorReview)
    return(
        <>
        <h2>hi</h2>
        <p><strong>Summary:</strong>{tutorReview.summary}</p>
        </>
    )
}

export default TutorReviewTile