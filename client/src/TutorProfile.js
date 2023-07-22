import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import NewMeetingForm from "./NewMeetingForm";
import NewTutorReviewForm from "./NewTutorReviewForm";
import TutorReviewTile from "./TutorReviewTile";


function TutorProfile(){
    const { tutorId } = useParams();
    const [tutor, setTutor] = useState(null);
    const [showMeetingForm, setShowMeetingForm] = useState(false)
    const [showTutorReviewForm, setShowTutorReviewForm] = useState(false)

  useEffect(() => {
    fetch(`/tutors/${tutorId}`)
      .then((response) => response.json())
      .then((data) => {
        setTutor(data);
      });
  }, [tutorId]);

console.log(tutor, "Tutor")

  if (!tutor) {
    return <div>Loading...</div>;
  }

  const handleMeetingClick = () => {
    setShowMeetingForm(!showMeetingForm)
  }
    
  const handleReviewClick = () => {
    setShowTutorReviewForm(!showTutorReviewForm)
  }

  const tutorReviewsMap = tutor.tutor_reviews.map((tutorReview) => (
    <TutorReviewTile tutorReview={tutorReview}/>
  ))
    return(
        <>
      <h2>Tutor Profile</h2>
      <div>
        <h3>{tutor.name}</h3>
        <div><img src={tutor.profile_picture}/></div>
        <p><strong>Experience:</strong> {tutor.experience}</p>
        <p><strong>Hourly Rate:</strong> {tutor.hourly_rate}</p>
        <p><strong>Subject:</strong> {tutor.subject}</p>
        <p><strong>Location:</strong> {tutor.location}</p>
        <button onClick={handleMeetingClick}>Book a Meeting with Me</button> 
        <br/>
        <br/>
        <button onClick={handleReviewClick}>Leave a Review</button>
        {showMeetingForm ? <NewMeetingForm /> : null}
        {showTutorReviewForm ? <NewTutorReviewForm tutor={tutor} setTutor={setTutor}/> : null}
      </div>

      <div>
        <h2>Tutor Reviews</h2>
      {tutorReviewsMap}
      </div>
    </>
    )
}

export default TutorProfile