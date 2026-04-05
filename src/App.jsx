import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ThreeClouds from './components/layout/ThreeClouds';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <ThreeClouds />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
