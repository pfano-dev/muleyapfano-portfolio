import React from "react";
import "./styles.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import WorkingExperience from "../../components/workingExperience/workingExperience";

function Experience() {
  return (
    <div className="experience" id="experiences">
      <h1>Experiences</h1>
      <div className="experienceCards">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
      <div className="workingExperience">
        <h2 className="">Working Experiences</h2>
        <WorkingExperience />
      </div>
    </div>
  );
}

export default Experience;
