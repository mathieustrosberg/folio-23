import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer/Footer";

import projectImage1 from "../../images/loon-garden.jpg";
import projectImage2 from "../../images/sagebym.jpg";
import projectImage3 from "../../images/password.jpg";
import projectImage4 from "../../images/todolist.jpg";

const projectData = [
  {
    name: "Loon-Garden Restaurant",
    description:
      "Création d'identité visuelle et réalisation d'un site pour un restaurant.",
    id: "loon-garden",
    details: [
      {
        label: "Identité visuelle",
        value: "Squarespace",
      },
    ],
    image: projectImage1,
  },
  {
    name: "Sage by M",
    description: "Création d'une boutique en ligne.",
    id: "sagebym",
    details: [{ label: "Squarespace", value: "" }],
    image: projectImage2,
  },
  {
    name: "Validateur interactif de mots de passe",
    description: "Guide permettant la création d'un mot de passe",
    id: "validate-password-project",
    details: [{ label: "HTML & CSS", value: "Javascript" }],
    image: projectImage3,
  },
  {
    name: "Todo List",
    description: "Application de liste de tâches",
    id: "todo-list",
    details: [{ label: "HTML & CSS", value: "Javascript" }],
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
                    {detail.label && (
                      <div className="main-details">
                        <div className="container-details">
                          <p className="details">{detail.label}</p>
                        </div>
                        {detail.value && (
                          <div className="container-details">
                            <p className="details">{detail.value}</p>
                          </div>
                        )}
                      </div>
                    )}
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
