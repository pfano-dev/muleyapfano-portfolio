import React from "react";
import "./styles.css";

function NavBar() {
  return (
    <nav>
      <div className="navDiv">
        <ul className="navList">
          <li>
            <a href="">Home</a>
          </li>

          <li>
            <a href="">About</a>
          </li>

          <li>
            <a href="">Skills</a>
          </li>

          <li>
            <a href="">Experiences</a>
          </li>

          <li>
            <a href="">Contact</a>
          </li>

          <li>
            <a href="">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
