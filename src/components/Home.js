import React, { useEffect, useState } from "react";
import "../css/Home.css";
// import character from "../../public/assets";

export const Home = () => {
  const [picIdx, setpicIdx] = useState(0);

  useEffect(() => {
    console.log(picIdx);
  }, [picIdx]);

  return (
    <div className="home-container">
      <section id="home-component">
        {" "}
        <div className="home-section">
          {" "}
          <h2 className="h2">ᶻ 𝗓 𐰁</h2>
          <h1>Hey, I’m Annika!</h1> <p>2A Computer Science @ UWaterloo.</p>
          <div
            style={{ display: "flex", marginBottom: "70px", marginTop: "20px" }}
          >
            <a href="/Resume.pdf" target="_blank" rel="noreferrer">
              <div className="cv-button">CV</div>
            </a>
          </div>
        </div>{" "}
        <div className="home-img-container">
          <img
            className="character"
            src={"/assets/marshal" + picIdx + ".gif"}
            alt="cute character"
            onClick={() => setpicIdx((picIdx + 1) % 3)}
          ></img>
        </div>
      </section>
    </div>
  );
};
