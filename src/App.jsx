import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import ProjectDetail from "./pages/ProjectsDetail/ProjectsDetails";

import "./App.css";

import "./pages/Home/Home.css";
import "./pages/About/About.css";
import "./pages/Projects/Projects.css";
import "./pages/ProjectsDetail/ProjectsDetails.css";

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
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectName" element={<ProjectDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
