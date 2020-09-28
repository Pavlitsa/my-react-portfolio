import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer-container">
        <div>
          <a className="copyright" href="/about">© 2020 Pavlina Zafeiri</a>
        </div>

        <div className="social">
        <a
            className="github"
            href="https://github.com/Pavlitsa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/pavlina-zafeiri-37109457/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
