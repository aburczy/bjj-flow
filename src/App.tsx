import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import TechniquesLibrary from "./pages/TechniquesLibrary";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/techniques" element={<TechniquesLibrary />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
