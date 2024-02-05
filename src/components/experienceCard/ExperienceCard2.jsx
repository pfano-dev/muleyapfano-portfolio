import React from "react";
import "./styles.css";
import { TiHtml5 } from "react-icons/ti";
import { FaReact, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

import { IoLogoFigma } from "react-icons/io5";
import { FiFramer } from "react-icons/fi";
import { SiAdobexd } from "react-icons/si";
import { SiCanva } from "react-icons/si";

function ExperienceCard2() {
  return (
    <div className="experienceCard">
      <div className="experienceBox">
        <h2>Web/Mobile App Design</h2>
        <div className="techs">
          <div className="lang">
            <IoLogoFigma size={20} />
            <div className="iconText">
              <p>Figma</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
          <div className="lang">
            <FiFramer size={20} />
            <div className="iconText">
              <p>Framer</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
          <div className="lang">
            <SiAdobexd size={20} />
            <div className="iconText">
              <p>Adobe XD</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
          <div className="lang">
            <SiCanva size={20} />
            <div className="iconText">
              <p>canva</p>
              <p className="years">3+ years experience</p>
            </div>
          </div>
          <div className="lang">
            <br />
            <div className="iconText">
              <p>
                <br />
              </p>
              <p className="years">
                <br />
              </p>
            </div>
          </div>
          <div className="lang">
            <br />
            <div className="iconText">
              <p>
                <br />
              </p>
              <p className="years">
                <br />
              </p>
            </div>
          </div>
          <div className="lang">
            <br />
            <div className="iconText">
              <p>
                <br />
              </p>
              <p className="years">
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard2;
