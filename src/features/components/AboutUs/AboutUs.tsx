import React from 'react'
import './AboutUs.css'

import aboutLogo from '../../../assets/icons/about-logo.svg'
import apple from '../../../assets/icons/apple.png'
import play from '../../../assets/icons/google.png'

const AboutUs: React.FC = () => {
  return (
    <div className="about-center">
      <div className="about">
        <h1>ABOUT US:</h1>
        <div className="about-content">
          <p>
            <h1 className="display-none-h1">ABOUT US:</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum non eu ipsum. Cras porta malesuada
            eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna
            sodales porta. Vivamus elit urna, dignissim a vestibulum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
          </p>
          <img src={aboutLogo} alt="about logo"></img>
        </div>
        <div className="btns-con">
          <button className="download-btn">
            <img src={apple} alt="apple icon"></img>
            <div className="btn-text">
              <h3>Download on the</h3>
              <h2>App Store</h2>
            </div>
          </button>
          <button className="download-btn">
            <img src={play} alt="play icon"></img>
            <div className="btn-text">
              <h3>Get it on</h3>
              <h2>Google Play</h2>
            </div>
          </button>
          <img
            className="display-none-img"
            src={aboutLogo}
            alt="about logo"
          ></img>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
