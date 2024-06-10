import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import about_image from "../../assets/about_image.jpg";


const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title">
        <h1>About Us</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-container">
      <div className="about-left">
        <h2>Our Mission</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto totam minus ducimus aut accusamus, voluptates quo inventore saepe! Distinctio sint est ipsa blanditiis unde vel atque culpa! Nisi, quo atque.</p>
      </div>
        <div className="about-right">
            <img src={about_image} alt="" />
            </div>
            </div>
      
    </div>
  )
}

export default About

