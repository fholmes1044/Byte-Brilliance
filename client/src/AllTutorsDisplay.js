import React, {useState} from "react";
import TutorDisplayTile from "./TutorDisplayTile";

function AllTutorsDisplay({allTutors}){
    if (!allTutors || allTutors.length === 0) {
        return <p>No tutors available.</p>;
      }
    
      const TutorDisplay = allTutors.map((tutor) => (
        <TutorDisplayTile key={tutor.id} tutor={tutor} />
      ));
    
    
    return(
        <>
        <h2>All Tutors</h2>
        {TutorDisplay}
        </>
    )
}

export default AllTutorsDisplay;