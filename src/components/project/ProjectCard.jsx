import React from "react";
import "./styles.css";
import { AiFillGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectCard">
      <h4>{project.name}</h4>
      <div className="projectImage">
        <img
          src={require("../../assets" + project.image_path)}
          alt={project.name}
        />
      </div>
      <p>{project.description}</p>
      <div className="links">
        <p>
          <a href={project.github_url}>
            <AiFillGithub /> github{" "}
          </a>
        </p>
        <p>
          <a href={project.deployed_url}>
            {" "}
            <TbWorldWww />
            deployed
          </a>
        </p>
      </div>

      <div className="projectTechs">
        <p>Technologies:</p>
        {project.key_techs.map((tech) => (
          <span className="tech" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
