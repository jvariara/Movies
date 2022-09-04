import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import './App.css'
import Movie from "./components/Movie";

function App() {
  return (
    <div className="app">
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:id" element={<Movie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
