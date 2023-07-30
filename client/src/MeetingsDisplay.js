import React,  {useContext} from "react";
import { UserContext } from "./context/user";
import MeetingDisplayCard from "./MeetingDisplayCard";

function MeetingDisplay(){
    const {user} = useContext(UserContext)
    // console.log(user.meetings)
    const meetingListStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center"
      };

    if(user.meetings === undefined){
    return <p>...Loading</p>
    }
        const meetingsMap = user.meetings.map((meeting) => (
        <MeetingDisplayCard key={meeting.id} meeting={meeting}/>
    ))

    return(
    <div>
        <h2>My Sessions</h2>
        <div style={meetingListStyle}>{meetingsMap}</div>
    </div>
    )
}
export default MeetingDisplay