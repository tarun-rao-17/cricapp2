import React from 'react'
import './Services.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import service2 from "../../assets/services2.jpg";
import service3 from "../../assets/sevices3.jpg";


const Services = () => {
  return (
    <div className='services' id='services'>
        <div className="services-title">
        <h1>Our Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="servicess">
        <div className="service">
          <img src={service2} alt="" />
          <div className="caption">
            <p>Cricket Match and scores</p>
          </div>
          
        </div>
        <div className="service">
          <img src={service3} alt="" />
          <div className="caption">
            <p>Player Stats and Records</p>

          </div>
        </div>

        </div>
      
    </div>
  )
}

export default Services
