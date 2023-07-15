import "./App.css";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/Skills";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import Project from "./pages/projects";
import SideDrawer from "./components/navbar/SideDrawer";
import Backdrop from "./components/backdrop/Backdrop";
import { useState } from "react";

function App() {
  const [sideDrawer, setSideDrawer] = useState(false);

  const DrawerHandler = () => {
    setSideDrawer((prevState) => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  const BackdropHandler = () => {
    setSideDrawer(false);
  };

  return (
    <div className="main">
      {sideDrawer ? <Backdrop click={BackdropHandler} /> : null}

      <NavBar DrawerHandler={DrawerHandler} />
      {sideDrawer ? (
        <SideDrawer show={sideDrawer} click={BackdropHandler} />
      ) : null}

      <Home />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <div className="circle small-1"></div>
      <div className="circle small"></div>
      <div className="circle big"></div>
      <div className="circle big-1"></div>
    </div>
  );
}

export default App;
