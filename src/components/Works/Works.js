import React from "react";
import "./Works.css";
import GeminiImg from "./GeminiImg.png";
import CryptoPriceTrackerImg from "./CryptoPriceTrackerImg.png";
import PortfolioImg from "./PersonalPortfolioImg.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <spn className="workDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque saepe
        esse eos corporis quibusdam laborum veniam dolores quos. Doloremque
        error amet corrupti fuga eaque ipsa sunt cumque magni accusantium
        tenetur!
      </spn>
      <div className="worksImgs">
        <img src={GeminiImg} alt="Gemini Clone" className="worksimg" />
        <img
          src={CryptoPriceTrackerImg}
          alt="Crypto Price Tracker"
          className="worksimg"
        />
        <img src={PortfolioImg} alt="Personal Portfolio" className="worksimg" />
      </div>
    </section>
  );
};

export default Works;
