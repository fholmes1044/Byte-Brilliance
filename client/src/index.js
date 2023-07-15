import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import actionCable from 'actioncable'

const CableApp = {}
CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')


//instead of adding to index.html file adding it here just create a script here
const script = document.createElement('script');
script.src = 'https://accounts.google.com/gsi/client';
script.async = true;
script.defer = true;
document.head.appendChild(script);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="825029250438-h983qrk6pdse6hofh9b0j2qu439ninb9.apps.googleusercontent.com">
  <BrowserRouter>
  <React.StrictMode>
    <App cable={CableApp.cable} />
  </React.StrictMode>
  </BrowserRouter>
  </GoogleOAuthProvider>
);

// ReactDOM.render(
//   <GoogleOAuthProvider clientId="825029250438-h983qrk6pdse6hofh9b0j2qu439ninb9.apps.googleusercontent.com">
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </GoogleOAuthProvider>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
