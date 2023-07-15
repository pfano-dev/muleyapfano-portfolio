import React from "react";
import "./styles.css";

function SideDrawer(props) {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div className={drawerClasses}>
      <ul className="inSide">
        <li>
          <a href="#home" onClick={props.click}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={props.click}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={props.click}>
            Skills
          </a>
        </li>

        <li>
          <a href="#experiences" onClick={props.click}>
            Experiences
          </a>
        </li>

        <li>
          <a href="#project" onClick={props.click}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={props.click}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;
