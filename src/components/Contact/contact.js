import React, { useRef } from "react";
import "./contact.css";
import twitterIcon from "../../Assets/twitterIcon.png";
import instagramIcon from "../../Assets/instagramIcon.png";
import githubIcon from "../../Assets/github-new-icon.png";
import linkedinIcon from "../../Assets/linkedinIcon.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_staxg3p", "template_w6rhy3b", form.current, {
        publicKey: "fWTLHe0uC8bZwFcDe",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Your email has been successfully sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        For any kind of query fill the form below.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="user_name"
          required
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="user_email"
          required
        />
        <textarea
          name="message"
          rows="5"
          className="msg"
          placeholder="message"
          required
        ></textarea>
        <button className="submitBtn" type="submit" value="Send">
          Submit
        </button>
        <div className="links">
          <a
            href="https://x.com/devanshugoell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="twitterIcon" className="link" />
          </a>
          <a
            href="https://www.instagram.com/devanshugoel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="instagramIcon" className="link" />
          </a>
          <a
            href="https://github.com/Devanshugoell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="githubIcon" className="link" />
          </a>
          <a
            href="https://www.linkedin.com/in/devanshu-goyal-10b8521bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="linkedinIcon" className="link" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
