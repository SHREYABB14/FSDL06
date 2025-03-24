// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional, for global styles
import App from './App'; // Import App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure this is present in index.html
);
