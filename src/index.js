import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AuthProvider from "../src/Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>
  // </React.StrictMode>
);
