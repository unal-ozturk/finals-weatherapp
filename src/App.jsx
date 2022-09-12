import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Weather from "./pages/weather/Weather";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Weather />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;