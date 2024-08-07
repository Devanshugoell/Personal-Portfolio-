import React from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu"></div>
      <Link className="desktopMenuListItem">Home</Link>
      <Link className="desktopMenuListItem">About</Link>
      <Link className="desktopMenuListItem">Projects</Link>
      <Link className="desktopMenuListItem">Contact Me</Link>
      <button className="desktopMenuBtn">
        <img src="" alt="" className="desktopMenuImg" /> Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
