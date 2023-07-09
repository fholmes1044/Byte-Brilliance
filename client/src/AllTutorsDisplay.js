import React, {useState} from "react";
import TutorCard from "./TutorCard";

function AllTutorsDisplay({allTutors}){
    if (!allTutors || allTutors.length === 0) {
        return <p>No tutors available.</p>;
      }
    
      const TutorDisplay = allTutors.map((tutor) => (
        <TutorCard key={tutor.id} tutor={tutor} />
      ));
    
    
    return(
        <>
        <h2>All Tutors</h2>
        {TutorDisplay}
        </>
    )
}

export default AllTutorsDisplay;