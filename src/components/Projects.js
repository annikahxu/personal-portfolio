import React from "react";
import { Project } from "./Project";
import "../css/Projects.css";

export const Projects = () => {
  return (
    <div className="projects-container">
      <section id="projects-component">
        <div className="section-container">
          <h2>🔧 Projects</h2>
          <div className="projects-section">
            <Project
              name="Youwriter"
              subtitle="If every lecture video could be a 5 line summary..."
              description="A full stack, AI summarizer tool that can convert any YouTube video into a written summary of the user’s preferred format. Just paste the link and watch the magic happen."
              marginL="0vw"
              badges={["REACT", "OPENAI", "FLASK", "PYTHON", "MONGODB"]}
              github="https://github.com/annikahxu/YouWriter"
              demoLink="https://drive.google.com/file/d/19wz9ZFHrJbSOO6o8WEhHr_qE1zhK1pAO/view"
              photo="/assets/youwriter.jpg"
            />
            <Project
              name="Timeowt"
              subtitle="Stay productive, cutely!"
              description="Cat-themed Chrome extension made for productivity and focus. Users can block sites, and Timeowt will prevent access to these while giving a friendly reminder to stay on track!"
              marginL="0vw"
              badges={["JAVASCRIPT", "CHROME API", "HTML", "CSS"]}
              github="https://github.com/annikahxu/Timeowt"
              photo="/assets/timeowt.jpg"
            />
            <Project
              name="IngredientSafe"
              subtitle="Trouble reading the fine print? No problem."
              description="What do packaged food, medication, and make-up have in common? Tiny but important ingredient labels. IngredientSafe is a full stack web app that scans fine-print labels to keep the aging and visually impaired safe from potential allergens."
              marginL="0vw"
              badges={["PYTHON", "OPENCV", "JAVASCRIPT", "HTML", "CSS"]}
              github="https://github.com/annikahxu/LunarHacks22"
              demoLink="https://devpost.com/software/ingredientsafe"
              photo="/assets/ingredientsafe.jpg"
            />
            <h3 style={{ fontSize: "8px", color: "white" }}>
              {" "}
              + this website! {"<"}3 (built with love and React){" "}
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};
