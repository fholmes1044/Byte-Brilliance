import React, {useState} from "react";
import { Card } from "react-bootstrap";
import SessionReviewForm from "./SessionReviewForm";

function MeetingDisplayCard({meeting}){
    
    const [showReviewForm, setShowReviewForm] = useState(false);

    const meetingCardStyle = {
        border: "1px solid blue", 
        width: "400px",
        height: "400px",
      };

      const handleSessionClick = () => {
        console.log(meeting.id)
        setShowReviewForm(!showReviewForm);
      }
return(
    <>
    <Card style={meetingCardStyle} >
        <p><strong>Date: </strong> {meeting.date}</p>
        <p><strong>Duration: </strong> {meeting.duration}</p>
        <p><strong>Location: </strong> {meeting.location}</p>
        <p><strong>Topic: </strong> {meeting.topic}</p>
        <p><strong>Tutor Name: </strong>{meeting.tutor.name} </p>
        <button onClick={handleSessionClick}>Add Session Review Notes</button>

        {showReviewForm && <SessionReviewForm meetingId={meeting.id} />}
    </Card>
    </>
)
}

export default MeetingDisplayCard