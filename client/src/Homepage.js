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
              <h5 className="learn-text">What new technology skills will you develop today? </h5>
              <div className="image-container first-image-container">
                <img src='https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80' alt="glasses on a keyboard"/>
                </div>
            </div>
          ) : (
            <>
            
            <h4>Welcome to Byte Brilliance</h4>
            <p>We are a platform that allows users to receive tutoring from tech experts. You can also meet other learners and post about your learning! Your learning journey awaits.</p>
            <div className="image-container">
            <img src="https://images.unsplash.com/photo-1689969795327-c8bce290a1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="hot air balloons"></img>
            </div>
            </>
          )}
        </div>
      );
    
   
}

export default HomePage