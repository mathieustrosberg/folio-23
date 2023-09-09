import React from "react";
import { Link, useLocation } from "react-router-dom";

import home from "../../assets/home.svg";
import projects from "../../assets/projects.svg";
import about from "../../assets/about.svg";
import mail from "../../assets/mail.svg";

const NavBar = () => {
  const location = useLocation(); // Obtenir l'emplacement actuel

  return (
    <div className="main-navbar">
      <Link
        to="/"
        className={`home-icon ${location.pathname === "/" ? "active" : ""}`}
      >
        <img src={home} alt="Home icon" />
      </Link>
      <Link
        to="/projects"
        className={`projects-icon ${
          location.pathname === "/projects" ? "active" : ""
        }`}
      >
        <img src={projects} alt="Projects icon" />
      </Link>
      <Link
        to="/about-me"
        className={`about-icon ${
          location.pathname === "/about-me" ? "active" : ""
        }`}
      >
        <img src={about} alt="About icon" />
      </Link>
      <div className={`mail-icon`}>
        <a href="mailto:your.email@example.com">
          <img src={mail} alt="Mail icon" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
