import React from "react";
import { Card } from "react-bootstrap";

function MeetingDisplayCard({meeting}){
    
    const meetingCardStyle = {
        border: "1px solid blue", 
        width: "400px",
        height: "400px",
      };
return(
    <>
    <Card style={meetingCardStyle} >
        <p><strong>Date: </strong> {meeting.date}</p>
        <p><strong>Duration: </strong> {meeting.duration}</p>
        <p><strong>Location: </strong> {meeting.location}</p>
        <p><strong>Topic: </strong> {meeting.topic}</p>
        <p><strong>Tutor Name: </strong>{meeting.tutor.name} </p>

    </Card>
    </>
)
}

export default MeetingDisplayCard