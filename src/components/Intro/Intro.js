import React from "react";
import resume from "../../Assets/resume-icon.png";
import bg from "../../Assets/bg.png";
import "./Intro.css";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Devanshu</span> <br />
          Web Developer
        </span>
        <p className="introPara">
          Computer science graduate seeking roles in web development .
          Proficient in JavaScript and React Js used in web development
          including version control tools like Git, GitHub
        </p>
        <Link>
          <button className="btn">
            <img src={resume} alt="resume" className="resume" /> Resume
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
