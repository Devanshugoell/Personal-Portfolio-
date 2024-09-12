import React from "react";
import "./Work.css";
import GeminiImg from "./GeminiImg.png";
import CryptoPriceTrackerImg from "./CryptoPriceTrackerImg.png";
import PortfolioImg from "./PersonalPortfolioImg.png";

const Work2 = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <div className="worksDone">
        <img src={GeminiImg} alt="GeminiImg" />
        <div className="workDesc">
          <h2 className="workTitle">GEMINI CLONE </h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            (techStack that i used is html , tailwindCss , react) (Used
            contextAPI and Google gemini API to fetch the data)
          </div>
          <div className="techStack">
            <a
              href="https://devanshu-project-0.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Live Website</span>
            </a>
            <a
              href="https://github.com/Devanshugoell/GeminiClone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
      <div className="worksDone">
        <img src={CryptoPriceTrackerImg} alt="CryptoPriceTrackerImg" />
        <div className="workDesc">
          <h2 className="workTitle">CRYPTO PRICE TRACKER </h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            (techStack that i used is react router dom , react, css, html ,
            react-google charts) (Used Coingecko API to fetch data and
            react-google-charts library to show the chart)
          </div>
          <div className="techStack">
            <a
              href="https://devanshu-project-1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Live Website</span>
            </a>

            <a
              href="https://github.com/Devanshugoell/Crypto-Price-Tracking-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
      <div className="worksDone">
        <img src={PortfolioImg} alt="PortfolioImg" />
        <div className="workDesc">
          <h2 className="workTitle">PERSONAL PORTFOLIO </h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            velit aliquam distinctio fugit blanditiis error voluptatum at
            reiciendis eum quidem. (Used email.js library to get the email in
            the contact form and used react-scroll for easy navigation).
          </div>
          <div className="techStack">
            <a
              href="https://devanshu-personal.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Live Website</span>
            </a>
            <a
              href="https://github.com/Devanshugoell/Personal-Portfolio-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work2;
