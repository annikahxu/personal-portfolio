import React from "react";
import "../css/Project.css";

export const Project = ({ name, description }) => {
  return (
    <div className="project-component">
      <div className="project-container">
        <div className="project-description-container">
          <div className="project-description">
            <h3> {name} </h3>
            <p> {description} </p>
          </div>
        </div>
        <div className="project-image-container">
          <div className="project-image">
            <img src="/assets/images.jpeg"></img>
          </div>
        </div>
      </div>
      <div class="flex justify-center text-blue items-center w-full h-full"></div>
    </div>
  );
};
