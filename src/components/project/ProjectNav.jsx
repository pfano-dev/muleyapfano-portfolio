import { category } from "@/type";
import React from "react";

export const NavItem = () => {
  let className = "";
  if (active === value) {
    className += "";
  }
  return (
    <li onClick={() => handlerFliterCategory(value)} className={className}>
      {value}
    </li>
  );
};

const ProjectNavBar = (props) => {
  return (
    <div className="">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="express" {...props} />
      <NavItem value="django" {...props} />
      <NavItem value="mongo" {...props} />
    </div>
  );
};

export default ProjectNavBar;
