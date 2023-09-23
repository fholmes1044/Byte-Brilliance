import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styling/index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import actionCable from 'actioncable'

const CableApp = {}
CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')

const script = document.createElement('script');
script.src = 'https://accounts.google.com/gsi/client';
script.async = true;
script.defer = true;
document.head.appendChild(script);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App cable={CableApp.cable} />
  </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
