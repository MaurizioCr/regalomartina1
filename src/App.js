import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./Components/Intro";
import 'bootstrap/dist/css/bootstrap.min.css';
import Chisei from "./Components/Chisei"
import NonSeiMartina from "./Components/NonSeiMartina"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/chisei" element={<Chisei />} />
        <Route path="/NonSeiMartina" element={<NonSeiMartina />} />
      </Routes>
    </Router>
  );
};

export default App;
