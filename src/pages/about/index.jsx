import React from "react";
import "./styles.css";
import about from "../../assets/images/about.jpg";
import { FaAward } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { MdComputer } from "react-icons/md";

function About() {
  return (
    <div className="about" id="about">
      <h1>About</h1>
      <section className="mainSection">
        <div className="imgSection">
          <div className="imgframe">
            <img src={about} alt="about" className="img" />
          </div>
        </div>
        <div className="cardSection">
          <div className="allcard">
            <div className="card">
              <FaAward className="icon" />
              <h6>Experience</h6>
              <p>2+ years Working</p>
            </div>

            <div className="card">
              <BsPeopleFill className="icon" />
              <h6>Clients</h6>
              <p>5+ south Africa</p>
            </div>

            <div className="card">
              <MdComputer className="icon" />
              <h6>Project</h6>
              <p>20+ Completed</p>
            </div>
          </div>
          <div className="textDiv">
            <h3>objective</h3>
            <p className="objective">
              I am a dedicated and diligent professional who thrives on
              surpassing deadlines, even in high-pressure situations. My
              enthusiasm and strong interpersonal skills enable me to excel both
              within team environments and public settings. I believe in giving
              my all, as it allows for continuous improvement and personal
              growth throughout my career. I view growth and success as the
              ability to overcome challenges by embracing failures and
              considering them as stepping stones towards achieving success.
            </p>
            <div className="aboutBtn">
              <button className="btn talkBtn">
                {" "}
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="#contact"
                >
                  Let's Talk
                </a>
              </button>
            </div>
          </div>
          <div className="education">
            <h3>Education</h3>
            <div className="first">
              <p className="p1">
                Bsc in Computer science and information System
              </p>
              <p>University of Venda (2016 - 2018)</p>
            </div>
            <div className="first">
              <p className="p1">Bsc in Computer science and mathematics</p>
              <p>University of Venda (2019 - 2020)</p>
            </div>
            <div className="first">
              <p className="p1">Bsc Honours Computing</p>
              <p>University of South Africa (currently)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
