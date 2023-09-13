import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

import projectImage1 from "../../images/loon-garden.jpg";
import projectImage2 from "../../images/sagebym.jpg";
import projectImageMore1 from "../../images/bars.jpg";
import projectImageMore2 from "../../images/logo.jpg";
import projectImageMore3 from "../../images/set.jpg";

const ProjectDetail = () => {
  const { projectName } = useParams();

  const projectData = [
    {
      name: "Loon-Garden Restaurant",
      description_1:
        "Anciennement une franchise les patrons du restaurant sont devenus indépendant, j'ai eu l'opportunité de créer une identité visuelle complète pour celui-ci. Mon rôle englobait la création du logo, la conception des cartes du menu, ainsi que le développement du site internet du restaurant. Le résultat final est une identité visuelle cohérente qui communique efficacement l’essence et le caractère du restaurant sur tous les supports, du logo au site Web.",
      description_2:
        "À partir de la plateforme Squarespace, j'ai développé le site web du restaurant. Il présente des images attractives de plats, des informations sur les heures d'ouverture, les réservations, les événements spéciaux, et plus encore. La mise en page du site a été optimisée pour les appareils mobiles, assurant ainsi une accessibilité optimale aux clients potentiels.",
      link: "https://www.loon-garden.fr/",
      id: "loon-garden",
      details: [
        {
          label: "Identité visuelle",
          value: "Squarespace",
        },
      ],
      image: projectImage1,
      image_1: projectImageMore1,
      image_2: projectImageMore2,
      image_3: projectImageMore3,
    },
    {
      name: "Sage by M",
      description_1: "Sage by M est une boutique de vêtements en ligne.",
      description_2:
        "Grâce à la plateforme Squarespace, j'ai développé une boutique en ligne. Le site Web propose des vêtements, accessoires, des informations sur les envois et retour, des options de commande, des promotions spéciales et d'une newsletter. La présentation du site Web a été optimisée pour offrir une expérience fluide sur les appareils mobiles, garantissant que les clients potentiels peuvent y accéder facilement.",
      link: "https://www.sagebym.store/",
      id: "sagebym",
      details: [{ label: "Squarespace", value: "" }],
      image: projectImage2,
      image_1: "",
      image_2: "",
      image_3: "",
    },
    {
      name: "Projet 3",
      description_1: "Description du projet 3",
      description_2: "Description du projet 3",
      id: "projet-3",
      details: [{ label: "Graphic Design", value: "Art" }],
      image: projectImage2,
    },
    {
      name: "Projet 4",
      description_1: "Description du projet 4",
      description_2: "Description du projet 4",
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
            <h2>Details</h2>
            <p>{project.description_1}</p>
            <p>{project.description_2}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </div>
          <div className="section">
            <div className="block-1">
              {project.image_1 && <img src={project.image_1} alt="Projet" />}
            </div>
            <div className="block-2">
              <div className="image-1">
                {project.image_2 && <img src={project.image_2} alt="Projet" />}
              </div>
              <div className="image-2">
                {project.image_3 && <img src={project.image_3} alt="Projet" />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
