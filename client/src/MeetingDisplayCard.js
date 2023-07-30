import React, {useState, useContext} from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "./context/user";
import SessionReviewForm from "./SessionReviewForm";

function MeetingDisplayCard({meeting}){
    
    const [showReviewForm, setShowReviewForm] = useState(false);
    const {user} = useContext(UserContext)

    const meetingCardStyle = {
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid blue", 
        width: "350px",
        height: "400px",
      };

      

      const handleSessionClick = () => {
        setShowReviewForm(!showReviewForm);
      }
      const meetingReviews = user.session_reviews.filter(
              (review) => review.meeting_id === meeting.id
      );

      const meetingsReviewMap =meetingReviews.map((review) => (
        <ul key={review.id}>
        <li>Rating: {review.rating}</li>
        <li>Comment: {review.comment}</li>
        </ul>
      ))
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

        {meetingsReviewMap}
    </Card>
    </>
)
}

export default MeetingDisplayCard