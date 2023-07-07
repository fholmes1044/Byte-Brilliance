
import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignupForm from './SignupForm';
import { UserProvider } from './context/user';
import NavBar from './NavBar';
import LoginForm from './LoginForm';
import HomePage from './Homepage';


function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);
  
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

          </Switch>
          
        </BrowserRouter>
      </UserProvider>
     </div>
   
  );
}

export default App;
