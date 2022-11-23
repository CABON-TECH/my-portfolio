import React from 'react'
import './Home.css'

const Home = () => {
  return (
 <div className="Home">
    <div className="text">
      <p>Hi There!
      <span className="wave" role="img" aria-labelledby="wave">
       👋🏻
      </span>
      </p>
    </div>
    <div>
     <p className='Name'>I'm <span className="name">Boniface Mbogho</span></p>
    </div>
    <div>
      <p className="job"><span>A Front End Web Developer with a great eye for </span><span>Design. I enjoy Crafting Unique Web Experiences </span><span>& Building Software Solutions</span></p>

    </div>
    <div>
      <button className="about" href="#about">About Me</button>
    </div>
 </div>
  )
}

export default Home;