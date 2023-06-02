import React from "react";
import "./styles.css";
import { services } from "../../assets/data/services";
import { languages } from "../../assets/data/languages";

function Skills() {
  return (
    <div className="skills">
      <h1> Skills</h1>
      <div className="skillsSection">
        <div className="leftSection">
          <div className="spSkills">
            <h2>Social and Personal Skills</h2>
            <p>
              Ability to work under pressure, team work skills, addaptive and
              creative, good communication skills and ability to multitask
            </p>
          </div>

          <div className="offer">
            <h2>What I Offer</h2>
            <div className="offerCard">
              {services.map((service) => (
                <div className="cards">
                  <service.icon size={40} color="#fff" />
                  <div className="info">
                    <h3>{service.service}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rightSection">
          <div className="skillsLevel">
            <h3>Programming langueges Skils</h3>
            {languages.map((language) => (
              <div className="level">
                <h4>{language.language} </h4>
                <div className="percent">
                  <p className="levelBar" style={{ width: language.level }}></p>
                  <p>{language.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
