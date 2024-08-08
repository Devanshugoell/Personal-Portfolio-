import React from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import contactImg from "../../Assets/contact.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Projects</Link>
        <Link className="desktopMenuListItem">Contact</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="Contact" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
