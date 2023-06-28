import React, {useState, useContext} from "react";
import { UserContext } from "./context/user";
import { useHistory} from "react-router-dom";

function LoginForm (){
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const {errors, setErrors} = useContext(UserContext)
    const { login } = useContext(UserContext)
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
        .then((res => res.json()))
        .then(loggedInUser => {
            if(!loggedInUser.errors){
                login(loggedInUser)
                history.push('/')
            }else{
                setUserName("")
                setPassword("")

                const errorLis = loggedInUser.errors.map(error => <li>{error}</li> )
              setErrors(errorLis)
            }
        })
    }

    return(
        <div>
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
                    type="text"
                    id="password"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value)}
                />
                <input type="submit"/>
            </form>
            <ul>
                {errors}
            </ul>
        </div>
    )
}

export default LoginForm