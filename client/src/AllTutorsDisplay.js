import React, {useContext, useEffect, useState} from "react";
import { UserContext } from "./context/user";
import TutorDisplayTile from "./TutorDisplayTile";

function AllTutorsDisplay({allTutors}){
  const {loggedIn, errors} = useContext(UserContext)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 
    if (allTutors.length > 0) {
      setLoading(false);
    }
  }, [allTutors]);


  if (loading) {
    return <p>Loading...</p>;
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