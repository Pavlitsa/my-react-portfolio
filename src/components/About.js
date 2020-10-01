import React from "react";
import Footer from "./Footer";
import "../styles/About.css";
import Header from "./Header";
import pavi from "../images/pavi.jpg";
// import { Link } from "react-router-dom";

const About = () => {
  const headerAbout = {
    title1: "A little bit about me and my professional journey so far.",
    img: pavi,
  };
  return (
    <div className="about" id="about">
      <Header title1={headerAbout.title1} image={headerAbout.img} />
      <hr className="hr" />
      <section className="about-container">
        <div className="title">
          <h4>Profile</h4>
        </div>
        <div className="paragraph">
          <p>
            With a degree in Political Science and first working experience in
            the film industry, almost 8 years ago I decided to move to Munich.
            After working in Retail and later in E-Commerce as a Customer
            Operations Manager, I recently decided to make a big career change
            and fully dedicate myself to learning how to code. Programming has
            always fascincated me because of all that can be built and achieved
            with it. As a plus, it offers me the opportunity for constant
            learning and improvement.
          </p>
          <p>
            Those are some of the reasons why, in winter of 2019, I decided to
            join the Ironhack Web Development Bootcamp in Berlin. After
            successfully completing it, I have been working on refining my
            skills by building new projects and working as a Frontend
            Development intern in the CBD industry. I am currently looking to
            join a welcoming team as a Junior Software Developer.
          </p>
        </div>
      </section>
      <hr className="hr" />
      <section className="experience">
        <div className="title">
          <h4>Experience</h4>
        </div>
        <div className="paragraph">
          <p>
            <strong>Web Developer Intern</strong>
            <br />
            <a href="https://nordicoil.de/">Nordic Oil</a>, Munich
          </p>

          <p>
            <strong>Full Stack Web Development Bootcamp</strong>
            <br />
            <a href="https://www.ironhack.com/en/web-development/berlin">
              Ironhack
            </a>
            , Berlin
          </p>

          <p>
            <strong>E-Commerce Customer Operations Manager </strong>
            <br />
            <a href="https://www.freeletics.com/en/">Freeletics GmbH</a>, Munich
          </p>

          <p>
            <strong>Community Management Intern </strong>
            <br />
            <a href="https://www.internations.org/">
              InterNations GmbH, Munich
            </a>
            , Munich
          </p>

          <p>
            <strong>Overnight Visual Merchandiser / Retail </strong>
            <br />
            Hollister Co., Munich
          </p>

          <p>
            <strong>Office Administrator, PA of the Managing Director</strong>
            <br />
            Filmopolis S.A, Athens
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
