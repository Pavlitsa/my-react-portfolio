import React from "react";
import ProjectCard from "./ProjectCard";
import coffefi from "../images/coffefi.jpg";
import flatHappens from "../images/flat-happens.jpg";
import ghostTown from "../images/ghost-town.jpg";

const ProjectList = (props) => {
  const projects = [
    {
      id: "2",
      title: '"Coffefi"',
      description:
        "Full stack responsive application with user generated content that helps users find or pin on a map all the work-friendly coffee places in the city.",
      stack:
        "Built with: Node.js, Express, MongoDB, JavaScript, Mapbox API, HTML, CSS",
      img: coffefi,
      link: "https://coffeefi.herokuapp.com/",
    },
    {
      id: "3",
      title: '"Flat Happens"',
      description:
        "Full stack responsive MERN application that allows users who live in a shared flat to arrange a schedule for their shared tasks.",
      stack:
        "Built with: React, Node.js, MongoDB, Express, JavaScript, HTML & CSS",
      img: flatHappens,
      link: "https://flat-happens.herokuapp.com/",
    },
    {
      id: "4",
      title: 'My very first project: "Ghost Town"',
      description:
        "A game for two players who have to cross the street without getting caught by the passing-by obstacles.",
      stack: "Built with: Javascript, p5.js, HTML, CSS",
      img: ghostTown,
      link: "https://pavlitsa.github.io/game-project-ghost-town/",
    },
  ];

  

  const ProjectComponent = projects.map((project, i) => {
    return (
      <ProjectCard
        key={projects[i].id}
        title={projects[i].title}
        description={projects[i].description}
        stack={projects[i].stack}
        image={projects[i].img}
        link={projects[i].link}
      />
    );
  });
  return <div id="projects">{ProjectComponent}</div>;
};

export default ProjectList;
