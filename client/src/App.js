
import './App.css';
import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignupForm from './SignupForm';
import { UserProvider } from './context/user';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <>
    <UserProvider>
    <SignupForm/>
     <h1>Page Count: {count}</h1>
     </UserProvider>
     </>
    // <BrowserRouter>
    // <div className="App">
    //   <Switch>
    //     <Route path="/testing">
    //       <h1>Test Route</h1>
    //     </Route>
    //     <Route path="/">
    //      
    //     </Route>
    //     <Route path="/signup">
    //       <SignupForm/>
    //     </Route>
    //   </Switch>
    // </div>
    // </BrowserRouter>
  );
}

export default App;
