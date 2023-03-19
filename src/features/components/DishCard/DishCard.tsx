import React from 'react'
import './DishCard.css'

import ILS from '../../../assets/icons/shekel.png'
import spicy from '../../../assets/icons/spicy.png'
import vegan from '../../../assets/icons/vegan.png'
import vegiterian from '../../../assets/icons/vegiterian.png'

interface IDishCard {
  src: string
  name: string
  ingredients: string
  price: string
  isSpicy: boolean
  isVegan: boolean
  isVegi: boolean
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const DishCard: React.FC<IDishCard> = ({
  src,
  name,
  ingredients,
  price,
  isSpicy,
  isVegan,
  isVegi,
  onClick,
}) => {
  return (
    <div className="dish-card" onClick={onClick}>
      <img src={src} alt="dish img"></img>
      <div className="content">
        <h1>{name}</h1>
        <div className="kind">
          {isSpicy ? <img src={spicy} alt="spicy icon"></img> : <></>}
          {isVegi ? <img src={vegiterian} alt="vegi icon"></img> : <></>}
          {isVegan ? <img src={vegan} alt="vegan icon"></img> : <></>}
        </div>
        <h2>{ingredients}</h2>
      </div>
      <div className="price">
        <div
          style={{
            width: '8vw',
            height: '1px',
            backgroundColor: 'black',
          }}
        ></div>
        <img src={ILS} alt="shekel icon"></img>
        <h3>{price}</h3>
        <div
          style={{
            width: '8vw',
            height: '1px',
            backgroundColor: 'black',
          }}
        ></div>
      </div>
    </div>
  )
}
export default DishCard
