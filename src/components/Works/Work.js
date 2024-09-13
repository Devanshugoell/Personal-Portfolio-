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
            Built a <b>Google Gemini Clone</b> using <b>React</b> and{" "}
            <b>Tailwind CSS</b> with seamless <b>API integration</b>.
            Implemented efficient <b>data management</b> using createContext,
            responsive design, and a typing effect for an interactive user
            experience. Features include <b>prompt saving</b> in the sidebar for
            easy access.
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
            Developed a <b>Crypto Price Tracker</b> app using <b> React.js</b>,
            integrating the <b>CoinGecko API</b> for real-time data updates.
            Utilized React Router DOM for client-side routing and{" "}
            <b>React Google Charts</b> for data visualization. Efficient data
            management was handled through the <b>Context API</b>.
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
            Created a <b>Personal portfolio</b> website using <b>React.js</b>,
            featuring seamless <b>email functionality</b> via Email.js for
            client-side message sending. Enhanced user experience with smooth
            scrolling through <b>React Scroll</b>, built with HTML, CSS, and JSX
            for a <b>responsive design</b>.
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
