import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";


const Header = (props) => {
  return (
    <div>
    <div className="empty-box"></div>
      <header className="header-container">
        <div>
          <h1>
            <span>{props.title1}</span>
          </h1>
          <h3>{props.subtitle}<span><Link className="here-link" to="/about">{props.link}</Link></span></h3>
          <hr/>
        </div>
        <div>
          <img src={props.image} height="540" width="820" alt="something" />
        </div>
      </header>
    </div>
  );
};

export default Header;
