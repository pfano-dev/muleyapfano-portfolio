import React from "react";
import "./styles.css";
import ProjectCard from "../../components/project/ProjectCard";
import { projects } from "../../assets/data/project";

function Project() {
  return (
    <div className="mainProject" id="project">
      <h1>Project</h1>
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
