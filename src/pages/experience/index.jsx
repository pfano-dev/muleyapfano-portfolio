import React from "react";
import "./styles.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import WorkingExperience from "../../components/workingExperience/workingExperience";

function Experience() {
  return (
    <div className="experience">
      <h1>Experiences</h1>
      <div className="experienceCards">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
      <div className="workingExperience">
        <WorkingExperience />
      </div>
    </div>
  );
}

export default Experience;
