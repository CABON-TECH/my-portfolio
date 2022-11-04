import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__container">
        <div className="Navbar__logo">
            <a href="#home">LOGO</a>
      
        </div>
        <div className="Navbar__menu">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
      </div>      
    </div>
        
  );
}

export default Navbar;


