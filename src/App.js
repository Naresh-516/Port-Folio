import Navbar from "./components/Navbar";
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useRef } from "react";
function App() {
  const homeref=useRef(null);
  const aboutref=useRef(null);
  const skillsref=useRef(null);
  const projectsref=useRef(null);
  const contactref=useRef(null);
  const scrollToSection=(sectionRef)=>{
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  
  return (
    <div className="App">
    <Navbar scrollToSection={scrollToSection} homeref={homeref} aboutref={aboutref} skillsref={skillsref} projectsref={projectsref} contactref={contactref}/>
    <section  ref={homeref}><Home/></section>
    <section ref={aboutref}> <About/></section>
    <section  ref={skillsref}><Skills/></section>
    <section ref={projectsref}><Projects/></section>
    <section ref={contactref}><Contact/></section>
    </div>
  );
}

export default App;
