function NewMeetingForm(){
return(
    <div>
        <form>
        <label>Duration: </label>
            <input
            type="text"
            id="duration"
            // value={userName}
            // onChange={ (e) => setUserName(e.target.value) }
            /><br/>
        <label>Location: </label>
            <input
            type="text"
            id="location"
            // value={userName}
            // onChange={ (e) => setUserName(e.target.value) }
        /><br/>
        <label>Topic: </label>
            <input
            type="text"
            id="location"
            // value={userName}
            // onChange={ (e) => setUserName(e.target.value) }
        /><br/>
        
        </form>
    </div>
)
}

export default NewMeetingForm