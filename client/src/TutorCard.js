import React from "react";
import { Card } from "react-bootstrap";


function TutorCard({tutor}){
    const {name, subject, availability, experience} = tutor

    const cardStyle = {
        border: "1px solid blue", 
        width: "400px",
        height: "400px",
      };

      const handleCardClick = () =>{
        console.log("clicked")
      }
return(   
<>
    <Card style={cardStyle} onClick={handleCardClick}>
      <Card.Img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRoaW5raW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"  
      style={{ width: '200px', height: '200px' }} 
      />
    <p><strong>Name: </strong>{name}</p>
    <p><strong>Subject: </strong>{subject}</p>
    <p><strong>Availability: </strong>{availability}</p>
    <p><strong>Experience: </strong>{experience}</p>
    <button></button>
    </Card>
  </>
)
}
export default TutorCard