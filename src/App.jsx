import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./Pages/SignUp/signup.jsx";
import Home from "./Pages/Home/home.jsx";
import Login from "./Pages/Login/login.jsx";
import Learn from "./Pages/Learn/learnmain.jsx";
import Education from "./Pages/Education/educationmain.jsx";

// ✅ Compete Pages
import KingOfTheHill from "./Pages/Compete/Kingofthehill/kingofthehillmain.jsx";
import Leaderboard from "./Pages/Compete/Leaderboard/leaderboardmain.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/education" element={<Education />} />

        {/* ✅ Compete Pages */}
        <Route path="/compete/king-of-the-hill" element={<KingOfTheHill />} />
        <Route path="/compete/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
