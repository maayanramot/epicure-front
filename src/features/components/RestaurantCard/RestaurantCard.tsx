import React from 'react'
import './RestaurantCard.css'

import deleteBtn from '../../../assets/icons/delete.svg'

interface IRestaurantCard {
  src: string
  name: string
  chef: string
  rating: string
  onClick: React.MouseEventHandler<HTMLDivElement>
  onImgClick: React.MouseEventHandler<HTMLDivElement>
  restaurantClickedId: string
}

const RestaurantCard: React.FC<IRestaurantCard> = ({
  src,
  name,
  chef,
  rating,
  onClick,
  onImgClick,
  restaurantClickedId,
}) => {
  const deleteRestaurant = async (restaurantClickedId: string) => {
    await fetch(
      `https://epicure-front-deploy.onrender.com/epicure/restaurants/${restaurantClickedId}`,
      {
        method: 'DELETE',
      },
    )
      .then((response) => {
        if (response.status === 200) {
          console.log('good')
        } else {
          console.log('not good')
        }
      })
      .catch((e) => console.log(e))
  }
  return (
    <div className="restaurant-card">
      <button
        className="delete-button"
        onClick={() => deleteRestaurant(restaurantClickedId)}
      >
        <img src={deleteBtn}></img>
      </button>
      <img src={src} alt="restaurant img"></img>
      <div>
        <h1 onClick={onClick}>{name}</h1>
        <h2>{chef}</h2>
        <img className="rating-img" src={rating} alt="rating img"></img>
      </div>
    </div>
  )
}

export default RestaurantCard
