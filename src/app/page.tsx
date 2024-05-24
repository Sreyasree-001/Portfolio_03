import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import { About } from "./about/About";
import Contact from "./contact/Contact";
import ProjectCards from "./projects/ProjectCards";
import Projects from "./projects/Projects";


export default function Home() {
  return (
    <div className="bg-black h-auto w-auto flex flex-col 
    ">
    <div className="sm:self-center sm:fixed">
      <Navbar/>
    </div>
    <div id="hero" className="sm:mt-20">
      <Hero/>
    </div>
    <div id="about" className="self-center">
      <About/>
    </div>
    <div id="projects" className="self-center">
      <ProjectCards/>
    </div>
    <div id="contact">
      <Contact/>
    </div>
    </div>
  );
}
