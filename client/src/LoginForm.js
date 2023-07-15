import React, {useState, useContext, useEffect} from "react";
import { UserContext } from "./context/user";
import { useHistory} from "react-router-dom";
import { GoogleLogin, useGoogleLogin, hasGrantedAnyScopeGoogle, hasGrantedAllScopesGoogle} from '@react-oauth/google';



function LoginForm (){
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [userCredential, setUserCredential] = useState('')
    const {errors, setErrors, login} = useContext(UserContext)
    // const { login } = useContext(UserContext)
    const history = useHistory()

    const responseMessage = (response) => {
        console.log("response", response)

        setUserCredential(response.credential)

        googleLogIn(response);

        // If we receive a "response" (truthy),
        // then we can guide the user to the next
        // authorized page

        // fetch("/login", {
        //     method: "POST", 
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         // How do we access the appropriate token
        //         // from "response"?

        //         // response.credential
        //     })
        // })
        // .then((res) => res.json())
        // .then(loggedInUser => {
        //     if(!loggedInUser.errors){
        //         login(loggedInUser)
        //         history.push('/')
        //     }else{
        //         setUserName("")
        //         setPassword("")
        //         console.log("er",  loggedInUser.errors)
        //     //     const errorLis = loggedInUser.errors.map(error => <li>{error}</li> )
        //       setErrors(loggedInUser.errors)
        //     }
        // })
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
                console.log("er",  loggedInUser.errors)
            //     const errorLis = loggedInUser.errors.map(error => <li>{error}</li> )
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
              // Perform any necessary actions upon successful login
            } else {
              console.log('Login failed');
              console.log(tokenResponse)
              // Perform any necessary actions upon failed login
            }
          } catch (error) {
            console.error('An error occurred during login:', error);
            // Handle the error appropriately
          }
        },
        flow: 'auth-code',
      });
      
      
    // const googleLogIn = useGoogleLogin({
    //     onSuccess: tokenResponse => console.log("codeSuccess",tokenResponse),
    //     flow: 'auth-code',
    //   });

    //   const hasAllAccess = hasGrantedAllScopesGoogle(
    //     tokenResponse,
    //     'google-scope-1',
    //     'google-scope-2',
    //   );

    //   const hasAnyAccess = hasGrantedAnyScopeGoogle(
    //     tokenResponse,
    //     'google-scope-1',
    //     'google-scope-2',
    //   );

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
                    type="password"
                    id="password"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value)}
                />
                <input type="submit"/>
            </form>
            <h2>React Google Login</h2>
            <br />
            <GoogleLogin
                // Would be best practice to store sensitive information inside Environment Variables
                clientId="825029250438-h983qrk6pdse6hofh9b0j2qu439ninb9.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={responseMessage}
                onFailure={errorMessage}
                cookiePolicy="single_host_origin"
                // onClick = {googleLogIn}
            />
            {/* <div id="signInDiv"></div> Render Google login button here */}
            {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
            <ul>
                {errors}
            </ul>
        </div>
    )
}

export default LoginForm