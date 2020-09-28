import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="card-container">
      <section className="card">
        <div className="ghost-img">
          <a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a>
          <img
            src={props.image}
            alt="screenshot"
            height="500px"
            width="800px"
            className="project-img"
          />
        </div>
        <div className="project-description">
          <ul>
            <li className="li-title">{props.description}</li>
            <li className="li-stack">{props.stack}</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
