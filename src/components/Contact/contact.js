import React from "react";
import "./contact.css";
import twitterIcon from "../../Assets/twitterIcon.png";
import instagramIcon from "../../Assets/instagramIcon.png";
import githubIcon from "../../Assets/github-new-icon.png";
import linkedinIcon from "../../Assets/linkedinIcon.png";

const contact = () => {
  return (
    <section className="contactPage">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        For any kind of query fill the form below.
      </span>
      <form className="contactForm">
        <input type="text" className="name" placeholder="Your Name" />
        <input type="email" className="email" placeholder="Your Email" />
        <textarea
          name="message"
          rows="5"
          className="msg"
          placeholder="message"
        ></textarea>
        <button className="submitBtn" type="submit" value="Send">
          Submit
        </button>
        <div className="links">
          <img src={twitterIcon} alt="twitterIcon" className="link" />
          <img src={instagramIcon} alt="instagramIcon" className="link" />
          <img src={githubIcon} alt="githubIcon" className="link" />
          <img src={linkedinIcon} alt="linkedinIcon" className="link" />
        </div>
      </form>
    </section>
  );
};

export default contact;
