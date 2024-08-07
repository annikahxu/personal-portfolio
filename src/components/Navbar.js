import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../css/Navbar.css";

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const onScroll = () => {
    const curScrollY = window.scrollY;

    if (curScrollY > prevScrollY + 20) {
      setShow(false);
      // console.log("no show nav");
    } else if (curScrollY < prevScrollY) {
      setShow(true);
      // console.log("yes show nav");
    }

    setPrevScrollY(curScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [prevScrollY]);

  return (
    <div className="navbar-component">
      <div className={show ? "active navbar-wrapper" : "hidden navbar-wrapper"}>
        <div className="navbar-image">
          <div className="navtext">
            {" "}
            <Link smooth to="home-component">
              <img src="/assets/marshal.gif" className="logo"></img>
            </Link>
          </div>
        </div>

        <ol className="navbar-items">
          <div className="navtext">
            {" "}
            <Link smooth to="about-component">
              About
            </Link>
          </div>
          <div className="navtext">
            {" "}
            <Link smooth to="experience-component">
              Experience
            </Link>
          </div>
          <div className="navtext">
            {" "}
            <Link smooth to="projects-component">
              Projects
            </Link>{" "}
          </div>
          <div className="navtext">
            {" "}
            <Link smooth to="contact-component">
              Contact
            </Link>{" "}
          </div>
        </ol>
      </div>
    </div>
  );
};
