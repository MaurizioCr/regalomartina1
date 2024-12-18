import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./Components/Intro";
import 'bootstrap/dist/css/bootstrap.min.css';
import Chisei from "./Components/Chisei";
import NonSeiMartina from "./Components/NonSeiMartina";
import SeiMartina from "./Components/SeiMartina";
import ProvaCheSeiMartina from "./Components/ProvaCheSeiMartina";
import DynamicQuestion from "./Components/Quiz";
import Success from "./Components/Success";
import bg from "./Assets/bg.jpeg";
import './App.css'
import Snowflakes from "./Components/Snowflake";


const App = () => {
  const questions = [
    {
      path: "/q1",
      question: "Di solito sono...",
      options: [
        { label: "Sempre arrabbiata", path: "/q2", isCorrect: true },
        { label: "Mai arrabbiata", path: "/NonSeiMartina" },
      ],
      background: bg,
    },
    {
      path: "/q2",
      question: "Cos'è più buono?",
      options: [
        { label: "Il cocco", path: "/NonSeiMartina" },
        { label: "La cioccolata fondente", path: "/q3", isCorrect: true },
      ],
      background: bg,
    },
    {
      path: "/q3",
      question: "Ti piacerebbe visitare una nuova città?",
      options: [
        { label: "No", path: "/NonSeiMartina" },
        { label: "Si", path: "/success", isCorrect: true },
      ],
      background: bg,
    },
  ];

  return (
    <Router>
      <div className="snowflakes">
      <Snowflakes />
    </div>    
      <Routes>   
        <Route path="/" element={<Intro />} />
        <Route path="/chisei" element={<Chisei />} />
        <Route path="/ProvaCheSeiMartina" element={<ProvaCheSeiMartina />} />        
        {/* Quiz */}
        {questions.map((q, index) => (
          <Route
            key={index}
            path={q.path}
            element={<DynamicQuestion questions={questions} />}
          />
        ))}
        <Route path="/NonSeiMartina" element={<NonSeiMartina />} />
        <Route path="/success" element={<Success />} />
        <Route path="/SeiMartina" element={<SeiMartina />} />
      </Routes>
    </Router>
  );
};

export default App;
