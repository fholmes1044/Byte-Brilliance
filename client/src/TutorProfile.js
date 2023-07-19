import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";


function TutorProfile(){
    const { tutorId } = useParams();
    const [tutor, setTutor] = useState(null);

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
    
    return(
        <>
      <h2>Tutor Profile</h2>
      <div>
        <h3>{tutor.name}</h3>
        <div>{tutor.profile_picture}</div>
        <p><strong>Experience:</strong> {tutor.experience}</p>
        <p><strong>Hourly Rate:</strong> {tutor.hourly_rate}</p>
        <p><strong>Subject:</strong> {tutor.subject}</p>
        <p><strong>Location:</strong> {tutor.location}</p>
        <button>Book a Meeting with Me</button> 
      </div>
    </>
    )
}

export default TutorProfile