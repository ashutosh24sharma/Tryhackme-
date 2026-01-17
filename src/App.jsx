import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/SignUp/signup.jsx";
import Home from "./Pages/Home/home.jsx";
import Login from "./Pages/Login/login.jsx";
import Learn from "./Pages/Learn/learn.jsx";
import Education from "./Pages/Education/education.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/learn" element={<Learn />} />
         <Route path="/education" element={<Education />} />
        
      </Routes>
    </Router>
  );
}

export default App;
