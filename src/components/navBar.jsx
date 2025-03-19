import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/navbar.css";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navBarMainDiv">
      <img src={logo} className="Navlogo" alt="Logo" />

      {/* Animated Hamburger Menu */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <AnimatePresence mode="wait">
          {menuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={30} color="#ff014f" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={30} color="#ff014f" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Links */}
      <ul className={`navBarLinksDiv ${menuOpen ? "open" : ""}`}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="resume"
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            ACADEMICS & CAREER
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            TECH SKILLS
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
