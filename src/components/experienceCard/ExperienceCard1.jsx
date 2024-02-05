import React from "react";
import "./styles.css";
import { TiHtml5 } from "react-icons/ti";
import { FaReact, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { SiExpress } from "react-icons/si";
import { CgFileDocument } from "react-icons/cg";
import { FaDocker } from "react-icons/fa";

function ExperienceCard1() {
  return (
    <div className="experienceCard">
      <div className="experienceBox">
        <h2>UI/UX Development</h2>
        <div className="techs">
          <div className="lang">
            <FaNodeJs size={20} />
            <div className="iconText">
              <p>Node js</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
          <div className="lang">
            <TbBrandCSharp size={20} />
            <div className="iconText">
              <p>C#</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
          <div className="lang">
            <SiDotnet size={20} />
            <div className="iconText">
              <p>Dot Net</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
          <div className="lang">
            <FaDocker size={20} />
            <div className="iconText">
              <p>Docker</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
          <div className="lang">
            <BsFiletypeSql size={20} />
            <div className="iconText">
              <p>SQL</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
          <div className="lang">
            <SiExpress size={20} />
            <div className="iconText">
              <p>express js</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
          <div className="lang">
            <CgFileDocument size={20} />
            <div className="iconText">
              <p>No Sql Database</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard1;
