import React from 'react'
import './Hero.css'

import searchIcon from '../../../assets/icons/search.png'

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div>
        <p>Epicure works with the top chef restaurants in Tel Aviv</p>
        <form className="hero-form">
          <button type="submit">
            <img src={searchIcon} alt="search logo" />
          </button>
          <input
            className="hero-input"
            type="search"
            placeholder="Search for restaurant cuisine, chef"
          />
        </form>
      </div>
    </div>
  )
}

export default Hero
