import React from "react";
import "./styles.css";
import DrawerToggle from "./DrawerToggle";

function NavBar(props) {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="navDiv">
          <div className="toggleNav">
            <div className="remove">
              <DrawerToggle
                className="DrawerToggle"
                click={props.DrawerHandler}
              />
            </div>

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
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
