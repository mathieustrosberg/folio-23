import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

import projectImage1 from "../../images/projects.webp";
import projectImage2 from "../../images/projects.webp";

const ProjectDetail = () => {
  const { projectName } = useParams();

  const projectData = [
    {
      name: "Loon-garden Restaurant",
      description:
        "Overview For this project, I designed an app that allows users to explore AI-generated art. My goal was to create an app that would not only showcase the beauty and complexity of AI-generated art but also allow users to interact with it in a meaningful way. To achieve this, I conducted extensive user research, analyzing existing apps and interviewing art enthusiasts and collectors.",
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
      description: "Description du projet 3",
      id: "projet-3",
      details: [{ label: "Graphic Design", value: "Art" }],
      image: projectImage2,
    },
    {
      name: "Projet 4",
      description: "Description du projet 4",
      id: "projet-4",
      details: [{ label: "Graphic Design", value: "Art" }],
      image: projectImage2,
    },
  ];

  const project = projectData.find((p) => p.id === projectName);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div>
      <div className="container-projects-details">
        <div className="container-button">
          <Link to="/projects">
            <button className="close-btn">
              <svg
                className="icon-button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                style={{
                  color:
                    "var(--token-0073ae2f-0032-441f-8a2d-71861ef066c4, rgb(33, 33, 33))",
                  userSelect: "none",
                  width: "24px",
                  height: "24px",
                  display: "inline-block",
                  fill: "var(--token-0073ae2f-0032-441f-8a2d-71861ef066c4, rgb(33, 33, 33))",
                  flexShrink: 0,
                }}
              >
                <g
                  style={{
                    color:
                      "var(--token-0073ae2f-0032-441f-8a2d-71861ef066c4, rgb(33, 33, 33))",
                    fontWeight: "bold",
                  }}
                >
                  <line
                    x1="200"
                    y1="56"
                    x2="56"
                    y2="200"
                    fill="none"
                    stroke="var(--token-0073ae2f-0032-441f-8a2d-71861ef066c4, rgb(33, 33, 33))"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                  <line
                    x1="200"
                    y1="200"
                    x2="56"
                    y2="56"
                    fill="none"
                    stroke="var(--token-0073ae2f-0032-441f-8a2d-71861ef066c4, rgb(33, 33, 33))"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                </g>
              </svg>
            </button>
          </Link>
        </div>
        <div className="col-top">
          <img className="project-image" src={project.image} alt="Projet" />
          <div className="container-more">
            <h1>{project.name}</h1>
            <div className="main-details">
              {project.details.map((detail, index) => (
                <div key={index} className="main-details">
                  <div className="container-details">
                    <p className="details">{detail.label}</p>
                  </div>
                  <div className="container-details">
                    <p className="details">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <h2>Details</h2>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
