import React from "react";
import "./Css/Logincss/Login.css";
import { Route, Routes} from "react-router-dom";
import { Login } from "./Views/Login";
import { Users } from "./Views/Users";
import {Userdetails} from "./Views/Userdetails"

/**Defining Route to Dashboard page(component) */

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<Users />}></Route>
      <Route path="/userdetails/:id" element={<Userdetails />}></Route>
    </Routes>
  );
}

export default App;
