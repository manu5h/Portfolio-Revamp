import React from "react";
import logo from "../assets/logo.png";
import "../styles/navbar.css";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <div className="navBarMainDiv">
      <img src={logo} className="Navlogo" />
      <ul className="navBarLinksDiv">
        <li>
          <Link to="hero" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            RESUME
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            PROJECTS
          </Link>
        </li>
        <li style={{paddingRight: "15px"}}>
          <div className="navbarContactDiv">
            <Link to="projects" smooth={true} duration={500}>
              CONTACT
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
