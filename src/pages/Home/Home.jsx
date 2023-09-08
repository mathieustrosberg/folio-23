import React from "react";

import emojiPhoto from "../../images/emoji.png";
import row from "../../assets/row.svg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="card-container">
        <div className="card">
          <div className="card-line">
            <h1 className="card-heading-left">Bonjour, je suis</h1>
            <div className="card-heading-right">
              <h1 className="card-heading-name">Mathieuu</h1>
              <div className="card-heading-image">
                <img src={emojiPhoto} alt="Portrait Emoji" />
              </div>
            </div>
          </div>
          <div className="card-line">
            <h1 className="card-heading-left">à la recherche d'une</h1>
            <div className="card-heading-right green-background">
              <h1 className="card-heading-school">alternance,</h1>
            </div>
          </div>
          <div className="card-line">
            <h1 className="card-heading-left">étudiant chez</h1>
            <a href="https://astonbysqli.com/" target="_blank">
              <div className="card-heading-right orange-background">
                <h1 className="card-heading-school">Aston</h1>
                <div className="card-heading-icon">
                  <img src={row} alt="Icône de Ligne" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
