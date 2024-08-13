import React from "react";
import "../css/About.css";

export const About = () => {
  return (
    <div className="about-container">
      <section id="about-component">
        <div className="section-container">
          {" "}
          <h2>About</h2>{" "}
          <div className="about-box shadow">
            <div className="about-blurb">
              <p>Lorem ipsum</p>
            </div>
            <div className="spotify">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/4RA2kuqYCdqk1CeZjc3jlL?utm_source=generator"
                width="100%"
                height="152"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>{" "}
      </section>
    </div>
  );
};
