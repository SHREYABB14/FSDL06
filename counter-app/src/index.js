// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import the App component
import './index.css';     // Optional: Global styles (if you add any)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // The div element where your React app will mount
);
