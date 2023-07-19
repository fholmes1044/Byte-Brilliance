import React, {useState} from "react";
import TutorDisplayTile from "./TutorDisplayTile";

function AllTutorsDisplay({allTutors}){
    if (!allTutors || allTutors.length === 0) {
        return <p>No tutors available.</p>;
      }
    
      const tutorListStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center"
      };

      const TutorDisplay = allTutors.map((tutor) => (
        <TutorDisplayTile key={tutor.id} tutor={tutor} />
      ));
    
    
    return(
        <>
        <h2>All Tutors</h2>
        <div style={tutorListStyle}>{TutorDisplay}</div>
        </>
    )
}

export default AllTutorsDisplay;