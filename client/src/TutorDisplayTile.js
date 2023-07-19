import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function TutorDisplayTile({tutor}){
    const {name, subject, availability, experience, id} = tutor

    const cardStyle = {
        border: "1px solid blue", 
        width: "400px",
        height: "400px",
      };

    const history = useHistory();

    const handleCardClick = () =>{
      fetch(`/tutors/${id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data,"data")
            history.push(`/tutors/${data.id}`)
          })
        
      }
return(   
<>
    <Card style={cardStyle} >
      <Card.Img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRoaW5raW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"  
      style={{ width: '200px', height: '200px' }} 
      />
    <p><strong>Name: </strong>{name}</p>
    <p><strong>Subject: </strong>{subject}</p>
    <p><strong>Availability: </strong>{availability}</p>
    <p><strong>Experience: </strong>{experience}</p>
    <button onClick={handleCardClick}> View {name}'s Full Profile</button>
    </Card>
  </>
)
}
export default TutorDisplayTile