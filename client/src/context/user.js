import React, { useState, useEffect  } from "react";
import {useHistory, useLocation} from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {
    // const [user, setUser] = useState({events:[]})
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(null)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false);
    const history = useHistory()
    // const location = useLocation()

    useEffect(() => {
        setLoading(true);
        fetch("/me")
            .then(res => res.json())
            .then((data) =>{
                console.log("data", data)
                setUser(data)
                if(data.errors){
                    setErrors(data.errors);
                    setUser({});
                    setLoggedIn(false);
                }else{
                    setLoggedIn(true)
                }
                setLoading(false)
            })
        }, [])

    // useEffect(() => {
    //     setErrors([])
    // }, [location.pathname])

    const login = (userobj) => {
        setUser(userobj)
        setLoggedIn(true)
        setErrors([])
    }


    const logout = () => {
        // history.push("/")
        setLoggedIn(false);
        setUser(null)  
        setErrors([])
        
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true);
        console.log("USER CONTEXT", user)
    }

    
    return (
        <UserContext.Provider value={{user, setUser, login, logout, signup, loggedIn, setLoggedIn, errors, setErrors}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};