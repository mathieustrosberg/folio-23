import React from "react";
import ExpData from "../../data/experiences.json";

const Experience = () => {
  return (
    <div className="profile-card">
      <div>
        <h2>{ExpData.title_section}</h2>
      </div>
      {ExpData.experiences.map((experience, index) => (
        <div key={index}>
          <div className="card-experience">
            <h3>{experience.title}</h3>
            <p>{experience.date}</p>
            <div className="card-details">
              <p>{experience.description}</p>
            </div>
            {index !== ExpData.experiences.length - 1 && (
              <div className="divider"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
