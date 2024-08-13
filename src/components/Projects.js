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
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend congue nisl, ut aliquam velit lobortis vel. Sed ut consectetur ipsum. Sed ut consectetur ipsum, in ultricies enim. Cras laoreet quam at ex semper tristique."
              marginL="0vw"
              badges={["REACT", "OPENAI", "FLASK", "PYTHON", "MONGODB"]}
            />
            <Project
              name="Timeowt"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend congue nisl, ut aliquam velit lobortis vel. Sed ut consectetur ipsum. Sed ut consectetur ipsum, in ultricies enim. Cras laoreet quam at ex semper tristique."
              marginL="0vw"
              badges={["JAVASCRIPT", "CHROME API", "HTML", "CSS"]}
            />
            <Project
              name="IngredientSafe"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend congue nisl, ut aliquam velit lobortis vel. Sed ut consectetur ipsum. Sed ut consectetur ipsum, in ultricies enim. Cras laoreet quam at ex semper tristique."
              marginL="0vw"
              badges={["PYTHON", "JAVASCRIPT", "HTML", "CSS"]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
