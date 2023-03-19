import React from 'react'
import './RestaurantCard.css'

interface IRestaurantCard {
  src: string
  name: string
  chef: string
  rating: string
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const RestaurantCard: React.FC<IRestaurantCard> = ({
  src,
  name,
  chef,
  rating,
  onClick,
}) => {
  return (
    <div className="restaurant-card" onClick={onClick}>
      <img src={src} alt="restaurant img"></img>
      <div>
        <h1>{name}</h1>
        <h2>{chef}</h2>
        <img className="rating-img" src={rating} alt="rating img"></img>
      </div>
    </div>
  )
}

export default RestaurantCard
