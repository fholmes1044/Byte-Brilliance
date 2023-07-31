import React, {useState, useContext} from "react";
import { UserContext } from "./context/user";
import { useHistory} from "react-router-dom";
import "./Styling/SignupForm.css"

function SignupForm (){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [email, setEmail] = useState("")
    const [profilePicture, setProfilePicture] = useState("")
    const [fullName, setFullName] = useState("")
    const [learningGoals, setLearningGoals] = useState("")
    const [age, setAge] = useState("")
    const [location, setLocation] = useState("")
    const {errors, setErrors} = useContext(UserContext)
    const { signup } = useContext(UserContext)
    const history = useHistory()
    const [showSignupErrors, setSignupShowErrors] = useState(false)

    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/signup", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              password: password,
              password_confirmation: passwordConfirmation,
              email: email,
              profile_picture: profilePicture,
              full_name: fullName,
              learning_goals: learningGoals,
              age: age,
              location: location
            })
          })
          .then(res => res.json())
          .then(user => {
            if (!user.errors){
              signup(user)
              console.log(user, "in the then")
              history.push('/')
            }else {
              setUsername("")
              setPassword("")
              setPasswordConfirmation("")
              setEmail("")
              setProfilePicture("")
              setFullName("")
              setLearningGoals("")
              setAge("")
              setLocation("")
              
              const errorLis = user.errors.map(error => <li>{error}</li> )
              setErrors(errorLis)
              setSignupShowErrors(true)
            }
        })
    };

    return(  
        <div className="signup-form-container">
            <div className="picture-container">
            <img
            src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Signup"
            />
        </div>
        <div className="form-container">
            <h2>Signup </h2>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange= {(e) => setUsername(e.target.value)}
                    /><br/>

                <label>Password: </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                /><br/>

                <label>Password Confirmation:</label>
                <input
                    type="password"
                    id="passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                /><br/>

                <label>Email:</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                /><br/>

                 <label>Profile Picture:</label>
                <input
                    type="text"
                    id="profilePicture"
                    value={profilePicture}
                    onChange={(e) => setProfilePicture(e.target.value)}
                /><br/>

                <label>Full Name:</label>
                <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                /><br/>

                <label>Learning Goals:</label>
                    <input
                    type="text"
                    id="learningGoals"
                    value={learningGoals}
                    onChange={(e) => setLearningGoals(e.target.value)}
                /><br/>

                <label>Age:</label>
                    <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                /><br/>
                <label>Location:</label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                /><br/>

                <input type="submit"/>
            </form>
            <ul>
                {showSignupErrors && errors}
            </ul>
            </div>
        </div>
    )
}

export default SignupForm