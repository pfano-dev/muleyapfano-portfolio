import React from "react";
import "./styles.css";
import { TiHtml5 } from "react-icons/ti";
import { FaReact, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

function ExperienceCard() {
  return (
    <div className="experienceCard">
      <div className="experienceBox">
        <h2>Front-End Development</h2>
        <div className="techs">
          <div className="lang">
            <TiHtml5 size={20} />
            <div className="iconText">
              <p>HTML</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
          <div className="lang">
            <FaCss3 size={20} />
            <div className="iconText">
              <p>CSS</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
          <div className="lang">
            <IoLogoJavascript size={20} />
            <div className="iconText">
              <p>javascript</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
          <div className="lang">
            <FaReact size={20} />
            <div className="iconText">
              <p>React js</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
          <div className="lang">
            <SiTypescript size={20} />
            <div className="iconText">
              <p>Typescript</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
          <div className="lang">
            <FaReact size={20} />
            <div className="iconText">
              <p>React Native</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
          <div className="lang">
            <SiNextdotjs size={20} />
            <div className="iconText">
              <p>Next js</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
