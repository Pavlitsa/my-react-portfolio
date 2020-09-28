import React from "react";
import "../styles/Home.css";
import Footer from "./Footer";
import Header from "./Header";
import ironhack2 from "../images/ironhack2.jpg";
import Projects from "./Projects";
import About from "./About";

const Home = () => {
  const headerHome = {
    title1: "Hi, my name is Pavlina and I'm a Web Developer living in Munich.",
    img: ironhack2
  };

  return (
    <div className="home" id="home">
      <Header title1={headerHome.title1} subtitle={headerHome.subtitle} link={headerHome.link} image={headerHome.img} />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
