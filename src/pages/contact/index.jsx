import React from "react";
import { MdEmail } from "react-icons/md";
import "./styles.css";

function Contact() {
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

            <p>Gerru1000@gmail.com</p>
            <p className="send">send message</p>
          </div>
          <div className="cardContact">
            <p className="title">
              <MdEmail size={25} className="icon" />
              Email
            </p>

            <p>Gerru1000@gmail.com</p>
            <p className="send">send message</p>
          </div>
          <div className="cardContact">
            <p className="title">
              <MdEmail size={25} className="icon" />
              Email
            </p>

            <p>Gerru1000@gmail.com</p>
            <p className="send">send message</p>
          </div>
        </div>
        <div className="right">
          <form className="innerRight">
            <input className="input" type="text" placeholder="Your Full Name" />
            <input className="input" type="text" placeholder="Your Email" />
            <textarea className="textArea" placeholder="Your Message" />
            <button className="btn msg">send message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
