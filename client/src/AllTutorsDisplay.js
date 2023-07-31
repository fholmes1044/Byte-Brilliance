import React, {useContext} from "react";
import { UserContext } from "./context/user";
import TutorDisplayTile from "./TutorDisplayTile";

function AllTutorsDisplay({allTutors}){
  console.log(allTutors)
  const {loggedIn, errors} = useContext(UserContext)

    if (!allTutors || allTutors.length === 0) {
        return <p>No tutors available.</p>;
      }
    
      const tutorListStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center"
      };

      if (Array.isArray(allTutors) ) {
        return (
          <>
            <h2>All Tutors</h2>
            <div style={tutorListStyle}>
              {allTutors.map((tutor) => (
                <TutorDisplayTile key={tutor.id} tutor={tutor} />
              ))}
            </div>
          </>
        );
      } else {
        return <p style={{background:"#f79ea3"}}>{loggedIn ? "No tutors available." : `${errors} Please login or signup.`}</p>;
      }
    }
   
export default AllTutorsDisplay;