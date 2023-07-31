import React, {useState, useContext, useEffect} from "react";
import { UserContext } from "./context/user";
import { useHistory} from "react-router-dom";
import { GoogleLogin, useGoogleLogin, hasGrantedAnyScopeGoogle, hasGrantedAllScopesGoogle} from '@react-oauth/google';
import "./Styling/LoginForm.css"

function LoginForm (){
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [userCredential, setUserCredential] = useState('')
    const {errors, setErrors, login} = useContext(UserContext)
    const history = useHistory()

    const responseMessage = (response) => {
        console.log("response", response)

        setUserCredential(response.credential)

        googleLogIn(response);
     
    };
    const errorMessage = (error) => {
        console.log("error",error);
    };

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
        .then(loggedInUser => {
            if(!loggedInUser.errors){
                login(loggedInUser)
                history.push('/')
            }else{
                setUserName("")
                setPassword("")
              setErrors(loggedInUser.errors)
            }
        })
    }
    const googleLogIn = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
          const id_token = tokenResponse.tokenId;

          try {
            const response = await fetch('/auth/google_oauth2/callback', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: `idtoken=${id_token}`,
            });
      
            if (response.ok) {
              console.log('Signed in as: ' + response.responseText);
            } else {
              console.log('Login failed', response);
              console.log(tokenResponse)
            }
          } catch (error) {
            console.error('An error occurred during login:', error);
          }
        },
        flow: 'auth-code',
      });
      

    return(
      <div className="login-form-container">
        <div className="picture-container">
          <img
            src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            alt="Login Image"
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

            <br />
            <div className="google-login-container">
            <GoogleLogin
                clientId="825029250438-h983qrk6pdse6hofh9b0j2qu439ninb9.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={responseMessage}
                onFailure={errorMessage}
                cookiePolicy="single_host_origin"  
            />
            </div>
            <ul>
                {errors}
            </ul>
            </div>
        </div>
    )
}

export default LoginForm