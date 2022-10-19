import React from "react";
import "./Css/Logincss/Login.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Login } from "./Pages/Login";
import { Users } from "./Pages/Users";

/**Defining Route to Dashboard page(component) */

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<Users />}></Route>
    </Routes>
  );
}

export default App;
