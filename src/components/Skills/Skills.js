import React from "react";
import "../Skills/Skills.css";
import gitIcon from "../../Assets/git-new-icon.png";
import TailwindcssIcon from "../../Assets/tailwindcss-new-icon.png";
import CssIcon from "../../Assets/css-new-icon.png";
import HtmlIcon from "../../Assets/html-new-icon.png";
import JavascriptIcon from "../../Assets/javascript-new-icon.png";
import ReactIcon from "../../Assets/reactjs-new-icon.png";
import ReduxIcon from "../../Assets/redux-new-icon.png";
import GithubIcon from "../../Assets/github-new-icon.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDescription">
        My expertise spans HTML, CSS, JavaScript, React.js, and Tailwind CSS,
        allowing me to create clean and efficient user interfaces. I also work
        with Redux for state management and use Git & GitHub for version
        control, ensuring seamless collaboration on projects.
      </span>
      <div className="skillBars">
        <div className="skillbar">
          <div className="html">
            <img src={HtmlIcon} alt="HTML" className="skillBarImg" /> HTMl
          </div>
          <div className="css">
            <img src={CssIcon} alt="CSS" className="skillBarImg" /> Css
          </div>
          <div className="javascript">
            <img
              src={JavascriptIcon}
              alt="Javascript"
              className="skillBarImg"
            />
            Javascript
          </div>
          <div className="tailwindcss">
            <img
              src={TailwindcssIcon}
              alt="Tailwindcss"
              className="skillBarImg"
            />
            Tailwindcss
          </div>
          <div className="react">
            <img src={ReactIcon} alt="React" className="skillBarImg" /> React
          </div>
          <div className="redux">
            <img src={ReduxIcon} alt="Redux" className="skillBarImg" /> Redux
          </div>
          <div className="git">
            <img src={gitIcon} alt="Git" className="skillBarImg" /> Git
          </div>
          <div className="github">
            <img src={GithubIcon} alt="Github" className="skillBarImg" /> Github
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
