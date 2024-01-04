import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
