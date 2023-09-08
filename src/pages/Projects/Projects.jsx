import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer/Footer";

import projectImage1 from "../../images/projects.webp";
import projectImage2 from "../../images/projects.webp";
import projectImage3 from "../../images/projects.webp";
import projectImage4 from "../../images/projects.webp";

const projectData = [
  {
    name: "Loon-garden Restaurant",
    description: "Description du projet 1",
    id: "projet-1",
    details: [{ label: "Ux Design", value: "Research" }],
    image: projectImage1,
  },
  {
    name: "Projet 2",
    description: "Description du projet 2",
    id: "projet-2",
    details: [{ label: "Graphic Design", value: "Art" }],
    image: projectImage2,
  },
  {
    name: "Projet 3",
    description: "Description du projet 2",
    id: "projet-3",
    details: [{ label: "Graphic Design", value: "Art" }],
    image: projectImage3,
  },
  {
    name: "Projet 4",
    description: "Description du projet 2",
    id: "projet-4",
    details: [{ label: "Graphic Design", value: "Art" }],
    image: projectImage4,
  },
];

const Projects = () => {
  return (
    <div>
      <div className="container-projects">
        {projectData.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <div className="card-projects">
              <img src={project.image} alt="Projet" />
              <div className="card-description">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
              <div className="main-details">
                {project.details.map((detail, index) => (
                  <div key={index}>
                    <div className="main-details">
                      <div className="container-details">
                        <p className="details">{detail.label}</p>
                      </div>
                      <div className="container-details">
                        <p className="details">{detail.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
