import React from 'react';
import Navbar from './components/Nav/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Skills from './components/Skills/Skills';
import Contact from './components/Contacts/Contacts';
import './App.css';


function App() {

  return (
    <main className="App">
      <Navbar />
      <About />
      <Projects />
      <Testimonials />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
