import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import NavBar from "./components/NavBar/NavBar";

import "./App.css";
import "./pages/Home/Home.css";
import "./pages/About/About.css";

import "./components/NavBar/NavBar.css";
import "./components/Footer/Footer.css";
import "./components/Experience/Experience.css";
import "./components/Diplome/Diplome.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
