
import './App.css';
import React, { useDeferredValue, useEffect, useState, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignupForm from './SignupForm';
import { UserProvider } from './context/user';
import NavBar from './NavBar';
import LoginForm from './LoginForm';
import HomePage from './Homepage';
import AllTutorsDisplay from './AllTutorsDisplay';
import TutorProfile from './TutorProfile';
import Chat from './Chat';
import Message from './Message';
import ChatDashboard from './ChatDashboard';
import { UserContext } from "./context/user";

// const ws = new WebSocket("ws://localhost:3000/cable")
function App({cable}) {
  const [allTutors, setAllTutors] = useState("")
  const user = useContext(UserContext)

  useEffect(() => {
    fetch("/tutors")
      .then((r) => r.json())
      .then((tutorData) => setAllTutors(tutorData));
  }, []);

  // ws.onopen = () => {
  //   console.log("CONNECTED TO WEBSOCKET", user)
  //   ws.send(
  //     JSON.stringify({
  //       command: "subscribe",
  //       identifier: JSON.stringify({
  //         // id: user.id,
  //         channel: "MessagesChannel"
  //       })
  //     })
  //   )
  // }
 
  return (
    <div className='App'>
      <UserProvider>
        
        <BrowserRouter> 
         <NavBar/>
          <Switch>
          <Route exact path = "/">
            {/* <h1>Page Count: {count}</h1> */}
            <HomePage/>
          </Route>
          <Route exact path="/signup" >
            <SignupForm/>
          </Route>
          <Route exact path="/login" >
            <LoginForm/>
          </Route>
          <Route exact path="/tutors">
            <AllTutorsDisplay allTutors={allTutors}  />
          </Route>
          <Route exact path="/tutors/:tutorId">
            <TutorProfile/>
          </Route>
          <Route exact path= "/chatdashboard">
            <ChatDashboard/>
          </Route>
      
          </Switch>
          
        </BrowserRouter>
      </UserProvider>
     </div>
   
  );
}

export default App;
