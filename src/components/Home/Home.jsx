import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import vs_image from "../../assets/vs.png";


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="home-container">
        <h1 className='sub-title'>Welcome to crickgeek</h1>
        <div className="current-match">
          <h2>Current Match</h2>
          <div className="match-details">
            <div className="team1">
              <h3>Team 1</h3>
              <p>Score: 200/5</p>
            </div>
            <div className="vs">
              <img src={vs_image} alt="vs" />
            </div>

            <div className="team2">
              <h3>Team 2</h3>
              <p>Score: 180/5</p>
            </div>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius odio asperiores repudiandae, fugit in iste temporibus eum maxime facere perspiciatis tenetur ea reiciendis distinctio exercitationem dicta nobis necessitatibus, et explicabo.</p>

      </div>

      
    </div>
  )
}

export default Home
