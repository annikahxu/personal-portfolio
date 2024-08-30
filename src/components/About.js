import React from "react";
import "../css/About.css";

export const About = () => {
  return (
    <div className="about-container">
      <section id="about-component">
        <div className="section-container">
          {" "}
          <h2>💡 About</h2>{" "}
          <div className="outer-about-box">
            <div className="about-box shadow">
              <h3> x </h3>
              {/* <div className="about-box-inner"> */}
              <div className="about-blurb">
                <h3> ‧ ₊ᵎᵎ🍒⋅˚✮ </h3>
                <p>
                  Hi, I’m Annika — a software developer, artist, and avid matcha
                  enjoyer based in Ontario. I’m studying Computer Science at the
                  University of Waterloo, where I’m passionate about blending my
                  technical skills with my creative side. Currently, I’m on a
                  study term after working as a software test developer at
                  Blackberry QNX!
                  <br />
                  <br />
                  In my free time, you can find me out visiting cafes, drawing,
                  or spending time with friends. I also love a good sweet treat,
                  so I’m always open for a quick chat over dessert! &nbsp; 🍰 🍧
                </p>
              </div>
              <div className="about-images-container">
                <div className="top-image-container">
                  <div className="top-image box-shadow">
                    <img alt="me" src="/assets/me.jpg"></img>
                  </div>
                  <div className="top-image box-shadow">
                    <img alt="some nice food" src="/assets/dessert.jpg"></img>
                  </div>
                </div>
                <div className="spotify-container">
                  <iframe
                    title="spotify"
                    className="spotify"
                    src="https://open.spotify.com/embed/track/7eUGADiLS5Jw38747vhpxo?utm_source=generator&theme=0"
                    width="100%"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                  {/* <iframe
                    title="spotify"
                    className="spotify"
                    src="https://open.spotify.com/embed/track/4RA2kuqYCdqk1CeZjc3jlL?utm_source=generator&theme=0"
                    width="100%"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe> */}
                  <h3> ♫ A song I like atm! </h3>
                </div>
              </div>
              {/* </div> */}
            </div>
            <img
              alt="star icon"
              className="about-star"
              src="/assets/star_icon_outline.png"
            ></img>
          </div>
        </div>{" "}
      </section>
    </div>
  );
};
