import React from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Nav/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Skills from './components/Skills/Skills';
import Contact from './components/Contacts/Contacts';
import './App.css';


function App() {

  
  return (
    <div className="App">
      <Navbar />
      <Home />
      
    </div>
  );
}

export default App;
