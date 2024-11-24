import React from "react";
import ReactDOM from "react-dom/client"; // React 18+
import { BrowserRouter } from "react-router-dom"; // React Router for routing
import App from "./App"; // Your main App component
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter future={{ v7_relativeSplatPath: true }}>
    <App />
  </BrowserRouter>
);
