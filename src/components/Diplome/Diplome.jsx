import DiplomeData from "../../data/diplomes.json";

const Diplome = () => {
  return (
    <div className="profile-card">
      <div>
        <h2>{DiplomeData.title_section}</h2>
      </div>
      {DiplomeData.experiences.map((experience, index) => (
        <div key={index}>
          <div className="card-experience">
            <h3>{experience.title}</h3>
            <p>{experience.date}</p>
            <p>
              {experience.description.split("\n").map((line, i) => (
                <div className="card-text" key={i}>
                  {line}
                </div>
              ))}
            </p>
            {index !== DiplomeData.experiences.length - 1 && (
              <div className="divider"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Diplome;
