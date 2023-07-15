import React from "react";
import "./styles.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp, BsGithub } from "react-icons/bs";
import Me from "../../assets/images/profile.jpeg";
import { languages } from "../../assets/data/languages";

function Home() {
  return (
    <main className="homeMain">
      <section className="scrollSection " id="home">
        <div className="scroll">
          <div className="line"></div>
          <div className="scrollSpace">
            <p className="scrollDown">scroll down</p>
          </div>
          <div className="line"></div>
        </div>

        <div className="homeInfo">
          <h1>Muleya Pfano</h1>
          <h4>Sofware Engineer</h4>

          <div className="contactIcon">
            <BsFillTelephoneFill size={25} color="#38c198" />
            <p>079 649 5495</p>
          </div>
          <div className="contactIcon">
            <MdEmail size={25} color="#38c198" />
            <p>Muleyapfano12345@gmail.com</p>
          </div>
          <div className="contactIcon">
            <MdLocationPin size={30} color="#38c198" />
            <p>mamelodi west, pretoria, Gauteng 0122</p>
          </div>
          <div className="socialIcon">
            <FaFacebookF className="icon" color="#38c198" />
            <FaLinkedinIn className="icon" color="#38c198" />
            <BsWhatsapp className="icon" color="#38c198" />
            <BsGithub className="icon" color="#38c198" />
          </div>
        </div>

        <div className="imgDiv">
          <img src={Me} alt="muleya pfano" className="image" />
        </div>
      </section>
      <section className="aboutSection">
        <div className="btnDiv">
          <a className="btn cvBtn abtn" href={Me} download>
            {" "}
            Download CV
          </a>

          <button className="btn talkBtn">Let's Talk</button>
        </div>
        <div className="aboutDiv">
          <h2>About Me</h2>
          <p>
            I am a hard worker, energetic, Self motivated, driven, goal oriented
            and ambitious individual who is dedicated and task oriented. I am
            outstanding in working with other people in terms of pursuing goals
            to reach the main objective at a particular time.
          </p>
          <div className="languageDiv">
            {languages.map((language) => (
              <div className="languageBox" key={language.language}>
                <p>{language.language} </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
