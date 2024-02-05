import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import axios from "axios";
import "./styles.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("running");
    emailjs
      .sendForm(
        "service_xs8d1um",
        "template_jyrcytk",
        form.current,
        "-p-CcAVKIAM-yBGPc"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert(
            "Your message has been successfully sent. Thank you for reaching out."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactPage" id="contact">
      <h1>Contact</h1>
      <div className="contact">
        <div className="left">
          <div className="cardContact">
            <p className="title">
              <MdEmail size={25} className="icon" />
              Email
            </p>

            <p>Muleyapafno12345@gmail.com</p>
            <p className="send">send message</p>
          </div>
          <div className="cardContact">
            <p className="title">
              <FaGithubSquare size={25} className="icon" /> GitHub
            </p>

            <p>pfano-dev</p>
            <a href="https://github.com/pfano-dev" className="send">
              View GitHub profile
            </a>
          </div>
          <div className="cardContact">
            <p className="title">
              <BsLinkedin size={25} className="icon" /> LinkedIn
            </p>

            <p>Pfano muleya</p>
            <a
              href="https://www.linkedin.com/in/pfano-muleya-850092181/"
              className="send"
            >
              View LinkedIn profile
            </a>
          </div>
        </div>
        <div className="right">
          <form className="innerRight" ref={form} onSubmit={sendEmail}>
            <input
              className="input"
              type="text"
              placeholder="Your Full Name"
              name="user_name"
            />
            <input
              className="input"
              type="text"
              placeholder="Your Email"
              ame="user_email"
            />
            <textarea
              className="textArea"
              placeholder="Your Message"
              name="message"
            />
            <input type="submit" value="Send" className="btn msg" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
