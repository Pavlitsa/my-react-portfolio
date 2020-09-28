import React from "react";
import "../styles/Projects.css";
// import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ProjectList from "./ProjectList";
import sketch from "../images/sketch.jpg";

const Projects = (props) => {
  const headerProjects = {
    // title1: "Below you can find all the projects I have created or participated in.",
    title1: "Below you can see some of my recent projects.",
    img: sketch,
  };

  return (
    <div className="home" id="home">
      <Header title1={headerProjects.title1} image={headerProjects.img} />
      <hr className="hr" />
      <ProjectList />
      <Footer />
    </div>
  );
};

export default Projects;
