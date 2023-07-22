
import './App.css';
import React, { useDeferredValue, useEffect, useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignupForm from './SignupForm';
import { UserProvider } from './context/user';
import NavBar from './NavBar';
import LoginForm from './LoginForm';
import HomePage from './Homepage';
import AllTutorsDisplay from './AllTutorsDisplay';
import TutorProfile from './TutorProfile';
import ChatDashboard from './ChatDashboard';
import MeetingsDisplay from './MeetingsDisplay';

function App() {
  const [allTutors, setAllTutors] = useState("")

  useEffect(() => {
    fetch("/tutors")
      .then((r) => r.json())
      .then((tutorData) => setAllTutors(tutorData));
  }, []);

//  console.log("td", allTutors)
  return (
    <div className='App'>
      <UserProvider>
        
        <BrowserRouter> 
         <NavBar/>
          <Switch>
          <Route exact path = "/">
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
            <TutorProfile allTutors={allTutors}/>
          </Route>
          <Route exact path= "/chatdashboard">
            <ChatDashboard/>
          </Route>
          <Route exact path= "/meetings">
            <MeetingsDisplay/>
          </Route>
          </Switch>
          
        </BrowserRouter>
      </UserProvider>
     </div>
   
  );
}

export default App;
