import React from "react";
import "./styles.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import ExperienceCard1 from "../../components/experienceCard/ExperienceCard1";
import ExperienceCard2 from "../../components/experienceCard/ExperienceCard2";
import WorkingExperience from "../../components/workingExperience/workingExperience";

function Experience() {
  return (
    <div className="experience" id="experiences">
      <h1>Experiences</h1>
      <div className="experienceCards">
        <ExperienceCard />
        <ExperienceCard1 />
        <ExperienceCard2 />
      </div>
      <div className="workingExperience">
        <h2 className="">Working Experiences</h2>
        <WorkingExperience />
      </div>
    </div>
  );
}

export default Experience;
