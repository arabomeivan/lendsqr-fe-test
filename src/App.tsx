import React from "react";
import "../src/Logincss/Login.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Login } from "./Pages/Login";

/**Defining Route to Dashboard page(component) */

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
