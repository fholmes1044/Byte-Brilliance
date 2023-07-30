import React, { useContext } from "react";
import { UserContext} from "./context/user";
import  "./Styling/Homepage.css"

function HomePage(){
    const { user, loggedIn } = useContext(UserContext)

    return (
        <div className="homepage-container">
          {loggedIn ? (
            <div>
              <h3 className="welcome-text">
                {user.username}, Welcome Home
              </h3>
              <h5 className="learn-text">What will you learn today? </h5>
            </div>
          ) : (
            <h3>Please Login or Signup</h3>
          )}
        </div>
      );
    
   
}

export default HomePage