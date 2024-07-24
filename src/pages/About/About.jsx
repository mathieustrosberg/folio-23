import React from "react";

import Footer from "../../components/Footer/Footer";
import Experience from "../../components/Experience/Experience";
import Diplome from "../../components/Diplome/Diplome";

import profilePhoto from "../../images/me.jpg";
import cityIcon from "../../assets/city.svg";
import schoolIcon from "../../assets/school.svg";

const About = () => {
  return (
    <div>
      <div className="container-about">
        <div className="col-left">
          <div className="profile-card-presentation">
            <img src={profilePhoto} alt="Portrait" />
            <div className="card-details">
              <h2>Bienvenue 👋</h2>
              <p>
                Je suis à la recherche d'une opportunité d'alternance en tant
                que concepteur développeur en nouvelles technologies.
                <br />
                Je serai ravie de rejoindre une entreprise qui pourra me faire
                évoluer en me formant en tant que développeur web.
              </p>
            </div>
            <div className="main-icon">
              <div className="container-icon">
                <img src={cityIcon} alt="Icône de la ville" />
                <p className="city-name">Dunkerque</p>
              </div>
              <div className="container-icon">
                <img src={schoolIcon} alt="Icône de l'école" />
                <p className="city-name">ASTON</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-right">
          <div className="profile-card">
            <h2>À propos de moi</h2>
            <div className="card-details">
              <p>
                Après avoir obtenu mon diplôme d’un BAC STI 2D Système
                information et numérique, j'ai travaillé pendant 6 ans dans
                l'industrie, notamment dans le secteur métallurgique.
                <br />
                Ma passion pour le numérique a été éveillée grâce à un ami qui
                travaillait en tant que web designer. Inspiré par son parcours,
                j'ai exploré le monde du web et découvert un fort intérêt pour
                le graphisme. J'ai donc effectué une transition professionnelle
                pour devenir graphiste, métier que j'ai exercé pendant trois
                ans.
                <br />
                Durant cette période, à la demande de plusieurs clients, mon
                intérêt pour le développement web s'est développer. J'ai ainsi
                participé à plusieurs formations qui m'ont permis non seulement
                de me familiariser avec les bases du développement web, mais
                aussi de développer une réelle appétence pour ce domaine.
              </p>
            </div>
          </div>
          <Diplome />
          <Experience />
          <div class="profile-card">
            <h2>Contact</h2>
            <div className="card-details">
              <a
                href="mailto:contact@mathieustrosberg.com"
                target="_blank"
                className="email-button"
              >
                Contactez-moi par Email
              </a>
              <a
                href="https://www.linkedin.com/in/mathieu-strosberg"
                target="_blank"
                className="linkedin-button"
              >
                Mon profil LinkedIn
              </a>
              <a
                href="https://github.com/mathieustrosberg"
                target="_blank"
                className="github-button"
              >
                Mon profil Github
              </a>
              <a
                href="public/MATHIEU_STROSBERG_CV.pdf"
                download="MATHIEU_STROSBERG_CV.pdf"
                className="cv-button"
              >
                Téléchargez mon CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
