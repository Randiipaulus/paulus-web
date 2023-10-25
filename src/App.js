import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Intro from "./components/Intro";
import About from "./routes/About";
import Skills from "./routes/Skills";
import Education from "./routes/Education";
import Experience from "./routes/Experience";
import Projects from "./routes/Projects";


function App() {
  return ( 
    <div className="App">
      
      <Routes>

        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
                
      </Routes>

    </div>
  );
}

export default App;
