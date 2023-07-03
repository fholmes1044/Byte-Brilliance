import React, { useContext } from "react";
import { UserContext} from "./context/user";

function HomePage(){
    const { user, loggedIn } = useContext(UserContext)
    console.log("HU", user)

    if (loggedIn === false){
        return (
            <h3>Please Login or Signup</h3>
        )
    }
    else {
       return(
        <div>
            <h3>{user.username} Welcome Home</h3>
            <h5>Time to learn </h5>
        </div>
    )  
    }
   
}

export default HomePage