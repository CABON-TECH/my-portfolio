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
 </div>
  )
}

export default Home;