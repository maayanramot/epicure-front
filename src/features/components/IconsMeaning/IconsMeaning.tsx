import React from 'react'
import './IconsMeaning.css'

import spicy from '../../../assets/icons/spicy.png'
import vegan from '../../../assets/icons/vegan.png'
import vegi from '../../../assets/icons/vegiterian.png'

const IconMeaning: React.FC = () => {
  return (
    <div className="icon-meaning">
      <p>THE MEANING OF OUR ICONS:</p>
      <div>
        <div className="center">
          <img className="king-dish-icon" src={spicy} alt="spicy icon"></img>
          <p>Spicy</p>
        </div>
        <div className="center">
          <img className="king-dish-icon" src={vegan} alt="vegan icon"></img>
          <p>Vegitarian</p>
        </div>
        <div className="center">
          <img className="king-dish-icon" src={vegi} alt="vegi icon"></img>
          <p>Vegan</p>
        </div>
      </div>
    </div>
  )
}

export default IconMeaning
