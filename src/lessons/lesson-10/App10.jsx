import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

export default function App10() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
