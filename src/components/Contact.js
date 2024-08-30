import React from "react";
import "../css/Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <section id="contact-component">
        <div className="section-container">
          {" "}
          <h2>✉️ Contact</h2>{" "}
          <div className="contact-section">
            <div className="paperclip-container">
              <img
                alt="paperclip"
                className="paperclip"
                src="/assets/paperclip.png"
              ></img>
            </div>
            <div className="contact-box shadow">
              {" "}
              <div className="contact-header">
                <h3>INFO CARD</h3>
                <h3>NO. 2283912383</h3>
              </div>
              <div className="contact-main-content">
                <div className="contact-pic">
                  {" "}
                  <div className="pic-container">
                    {" "}
                    <img
                      style={{
                        filter: "contrast(0.8)",
                        borderRadius: "10px",
                        transform: "rotate(-5deg)",
                        border: "1px solid black",
                      }}
                      src="/assets/marshalcard.jpeg"
                    />
                  </div>{" "}
                </div>
                <div className="contact-text">
                  <div className="contact-row">
                    {" "}
                    <h3 className="scribble"> Linkedin: </h3>{" "}
                    <a
                      href="https://www.linkedin.com/in/annika-h-xu/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="social-link">
                        {" "}
                        <h3> LINKEDIN </h3>{" "}
                      </div>
                    </a>
                  </div>
                  <div className="contact-row">
                    {" "}
                    <h3 className="scribble"> Email: </h3>{" "}
                    <a href="mailto:a25xu@uwaterloo.ca">
                      <div className="social-link">
                        {" "}
                        <h3> EMAIL </h3>{" "}
                      </div>
                    </a>
                  </div>
                  <div className="contact-row">
                    {" "}
                    <h3 className="scribble"> Github: </h3>{" "}
                    <a
                      href="https://github.com/annikahxu"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="social-link">
                        {" "}
                        <h3> GITHUB </h3>{" "}
                      </div>
                    </a>
                  </div>
                  <p className="signature"> Annika :p </p>
                  <h3 className="barcode"> 17328917938210498209 </h3>
                </div>
              </div>
            </div>
            <img
              alt="star icon"
              className="contact-star1"
              src="/assets/star_icon_outline.png"
            ></img>
            <img
              alt="star icon"
              className="contact-star2"
              src="/assets/star_icon_outline.png"
            ></img>
          </div>
        </div>{" "}
      </section>
    </div>
  );
};
