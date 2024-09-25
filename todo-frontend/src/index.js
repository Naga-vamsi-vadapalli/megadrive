// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './components/App'; // Import your main App component
import './styles/App.css'; // Import your CSS styles

// Create a root for the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application inside the BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
