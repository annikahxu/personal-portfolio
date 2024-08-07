import React from "react";
import { Project } from "./Project";
import "../css/Projects.css";

export const Projects = () => {
  return (
    <div className="projects-container">
      <section id="projects-component">
        <div className="projects-section">
          <div className="section-container">
            <h2>Projects</h2>
            <Project
              name="Youwriter"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend congue nisl, ut aliquam velit lobortis vel. Sed ut consectetur ipsum."
            />
            <Project name="2" />
            <Project name="3" />
          </div>
        </div>
      </section>
    </div>
  );
};
