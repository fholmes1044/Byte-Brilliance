import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import NewMeetingForm from "./NewMeetingForm";
import NewTutorReviewForm from "./NewTutorReviewForm";
import TutorReviewTile from "./TutorReviewTile";
import "./Styling/TutorProfile.css"; 
import "./Styling/TutorReviewTile.css";


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
    <TutorReviewTile key={tutorReview.id} tutorReview={tutorReview}/>
  ))

  const defaultProfilePicture = "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRoaW5raW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60";
  const tutorProfilePicture = tutor.profile_picture || defaultProfilePicture;

    return(
        <>
      <h2>Tutor Profile</h2>
      <div>
        <h3>{tutor.name}</h3>
        <div><img src={tutorProfilePicture} className="profile-picture"/></div>
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
<h2>Tutor Reviews</h2>
      <div className="tutor-reviews-container">
        
      {tutorReviewsMap}
      </div>
    </>
    )
}

export default TutorProfile