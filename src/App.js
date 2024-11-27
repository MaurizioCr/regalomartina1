import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./Components/Intro";
import 'bootstrap/dist/css/bootstrap.min.css';
import Chisei from "./Components/Chisei"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/chisei" element={<Chisei />} />
      </Routes>
    </Router>
  );
};

export default App;
