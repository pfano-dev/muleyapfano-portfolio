import React from "react";
import "./styles.css";

function NavBar() {
  return (
    <nav>
      <div className="navDiv">
        <ul className="navList">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#experiences">Experiences</a>
          </li>

          <li>
            <a href="#project">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
