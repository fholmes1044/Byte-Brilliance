import React, {useState, useContext} from "react"
import { UserContext } from "./context/user";
import { useParams } from "react-router-dom";

function NewMeetingForm(){
    const [date, setDate] = useState("")
    const [duration, setDuration] = useState("")
    const [location, setLocation] = useState("")
    const [topic, setTopic] = useState("")
    const { tutorId } = useParams();
    const {user, errors, setErrors, setUser} = useContext(UserContext)
   
    const addNewMeeting = (newMeeting) => {
        setUser({ ...user, meetings: [...user.meetings, newMeeting]});
      }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = {
            date: date,
            duration: duration, 
            location: location, 
            user_id: user.id,
            tutor_id: tutorId,
            topic: topic
        }
        fetch("/meetings", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
          
            if(!data.errors){
                window.alert("Meeting was created!");
                setDate("");
                setDuration("");
                setLocation("");
                setTopic("");
                addNewMeeting(data);
                setErrors([]);
            }else{
                const newMeetingFormErrorList = data.errors.map(error => <li key={error}>{error}</li> )
                setErrors(newMeetingFormErrorList)
            }
        })
        
    }
return(
    <div>
        <form onSubmit={handleFormSubmit}>
        <label>Date: </label>
            <input
            type="date"
            id="date"
            value={date}
            onChange={ (e) => setDate(e.target.value) }
            /><br/>
        <label>Duration: </label>
            <input
            type="text"
            id="duration"
            value={duration}
            onChange={ (e) => setDuration(e.target.value) }
            /><br/>
        <label>Location: </label>
            <input
            type="text"
            id="location"
            value={location}
            onChange={ (e) => setLocation(e.target.value) }
        /><br/>
        <label>Topic: </label>
            <input
            type="text"
            id="location"
            value={topic}
            onChange={ (e) => setTopic(e.target.value) }
        /><br/>
        <input type="submit"/>
        </form>
        {errors}
    </div>
)
}

export default NewMeetingForm