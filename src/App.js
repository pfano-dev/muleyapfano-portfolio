import "./App.css";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/Skills";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import Project from "./pages/projects";

function App() {
  return (
    <div className="main">
      <NavBar />
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
