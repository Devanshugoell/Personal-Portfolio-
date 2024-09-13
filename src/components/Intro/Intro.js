import React from "react";
import resume from "../../Assets/resume-icon.png";
import bg from "../../Assets/new-bg-remove-img.png";
import "./Intro.css";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Devanshu</span> <br />
          <span>Web Developer</span>
        </span>
        <p className="introPara">
          Computer science graduate seeking roles in web development. <br />
          Proficient in JavaScript and React Js used in web development
          including version control <br /> tools like Git, GitHub
        </p>
        <a
          href="https://drive.google.com/file/d/1gwPsJ1Na8p5OK4kMgnmj7chPy-pWOiEo/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            <img src={resume} alt="resume" className="resume" /> Resume
          </button>
        </a>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
