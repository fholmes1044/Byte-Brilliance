import React, {useState, useContext} from "react";
import { UserContext } from "./context/user";
import { useHistory} from "react-router-dom";
import "./Styling/LoginForm.css"

function LoginForm (){
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [showErrors, setShowErrors] = useState(false)
    
    const {errors, setErrors, login} = useContext(UserContext)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("/login", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username : userName,
                password: password
            })
        })
        .then((res) => res.json())
        .then((loggedInUser) => {
            if(!loggedInUser.errors){
                login(loggedInUser)
                history.push('/')
            }else{
                setUserName("")
                setPassword("")
              setErrors(loggedInUser.errors)
              setShowErrors(true);
            }
        })
    }
    
    return(
      <div className="login-form-container">
        <div className="picture-container">
          <img
            src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            alt="Login"
          />
        </div>
        <div className="form-container">
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input
                type="text"
                id="username"
                value={userName}
                onChange={ (e) => setUserName(e.target.value) }
                /><br/>

                <label>Password: </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value)}
                />
                <input type="submit"/>
            </form>

            <ul>
                {showErrors && errors}
            </ul>
            </div>
        </div>
    )
}

export default LoginForm