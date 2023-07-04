import React from "react";
import Home from "./pages/Home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {Routes,Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route  path="/profile" element={<Profile/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route  path="/register" element={<Register/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
