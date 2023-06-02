import React from "react";
import "./styles.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp, BsGithub } from "react-icons/bs";
import Me from "../../assets/images/profile.jpeg";
import { languages } from "../../assets/data/languages";

function Home() {
  console.log(languages);
  return (
    <main style={{ padding: "0 5rem" }}>
      <section className="scrollSection">
        <div>
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
            <BsFillTelephoneFill className="icon" />
            <p>079 649 5495</p>
          </div>
          <div className="contactIcon">
            <MdEmail className="icon" />
            <p>Muleyapfano12345@gmail.com</p>
          </div>
          <div className="contactIcon">
            <MdLocationPin className="icon" />
            <p>mamelodi west, pretoria, Gauteng 0122</p>
          </div>
          <div className="socialIcon">
            <FaFacebookF className="icon" />
            <FaLinkedinIn className="icon" />
            <BsWhatsapp className="icon" />
            <BsGithub className="icon" />
          </div>
        </div>

        <div>
          <img src={Me} alt="muleya pfano" className="image" />
        </div>
      </section>
      <section className="aboutSection">
        <div className="btnDiv">
          <button className="btn cvBtn">Download CV</button>
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
              <div className="languageBox">
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
