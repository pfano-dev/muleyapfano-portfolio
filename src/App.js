import "./App.css";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/Skills";
import Experience from "./pages/experience";

function App() {
  return (
    <main className="main">
      <div className="circle small-1"></div>
      <div className="circle small"></div>
      <div className="circle big"></div>
      <div className="circle big-1"></div>

      <NavBar />
      <Home />
      <About />
      <Skills />
      <Experience />
    </main>
  );
}

export default App;
