import React from "react";
import "../css/Project.css";

export const Project = ({
  name,
  subtitle,
  description,
  marginL,
  badges,
  github,
  demoLink,
  photo,
}) => {
  return (
    <div className="project-component">
      <div className="project-container">
        <div
          className="project-description-container shadow"
          style={{ marginLeft: marginL }}
        >
          <div className="project-description">
            <div className="title">
              <h3> {name} </h3>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: "20px" }}
              >
                <button>
                  {" "}
                  <svg
                    className="github"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    // width="5vw"
                    fill="#FFFFFF"
                    // height="5vw"
                  >
                    <path d="M12 .5C5.4.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.5-4-1.5-.6-1.6-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.3.1 2 .1 2.5 1.6.8 1.5 2 1.1 2.6.9.1-.6.3-1.1.5-1.3-2.7-.3-5.5-1.3-5.5-6.2 0-1.4.5-2.5 1.3-3.5-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.3 1-.3 2-.4 3.1-.4s2.1.2 3.1.4c2.3-1.6 3.4-1.3 3.4-1.3.6 1.7.2 3 .1 3.3.8 1 1.3 2.1 1.3 3.5 0 4.9-2.8 5.9-5.5 6.2.4.4.7 1 .7 2v3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.9 18.6.5 12 .5z" />
                  </svg>
                </button>
              </a>
            </div>
            <p className="subtitle">
              {" "}
              {">"} {subtitle}{" "}
            </p>
            <p> {description} </p>
          </div>
          <div className="badges">
            {badges.map((badge) => (
              <div key={badge} className="badge">
                <p className="badge-text">{badge}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="project-image-container"> */}
        {/* <div className="project-image"> */}
        <a href={demoLink} target="_blank" rel="noreferrer">
          <div className="project-image-container shadow">
            <h3> - x </h3>
            <img className="image box-shadow" src={photo}></img>
          </div>
        </a>

        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};
