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
          <h1>Hey, I’m Annika!</h1>{" "}
          <p>
            I'm a software developer, artist, and avid ice cream enjoyer
            studying Computer Science @ UWaterloo. Currently working at
            Blackberry QNX.
          </p>
          <button className="cv-button">CV</button>
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
