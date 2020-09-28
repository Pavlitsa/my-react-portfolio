import React from "react";
import "../styles/Navbar.css";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";


const Navbar = () => {
  return (
    <div className="nav-container">
      <div>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="name-logo"
      >Pavlina Zafeiri
      </Link>
      </div>
      <div className="nav-item">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >About
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Projects
          </Link>
      </div>
    </div>
  );
};

export default Navbar;
