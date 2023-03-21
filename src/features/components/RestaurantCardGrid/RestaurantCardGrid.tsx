import React, { useState } from 'react'
import './RestaurantCardGrid.css'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { IRestaurant, Istore } from '../../../services/interface'
import RestaurantCard from '../RestaurantCard/RestaurantCard'

interface IRestaurantCardGrid {
  filter: object[]
}

const RestaurantCardGrid: React.FC<IRestaurantCardGrid> = ({ filter }) => {
  const navigate = useNavigate()
  const restaurants = useSelector((state: Istore) => state.restaurants.value)
  const [currentRestaurant, setCurrentRestaurant] = useState<IRestaurant>(
    restaurants[1],
  )
  const handleClick = (restaurant: IRestaurant) => {
    setCurrentRestaurant(restaurant)
  }

  const restaurant = restaurants.map(
    (restaurant: IRestaurant, index: number) => {
      return (
        <RestaurantCard
          onImgClick={() => handleClick(restaurant)}
          key={index}
          onClick={() => navigate(`/restaurants/${restaurant.id}`)}
          restaurantClickedId={currentRestaurant._id}
          src={require(`../../../assets/imgs/${restaurant.img}.png`)}
          name={restaurant.name}
          chef={restaurant.chef}
          rating={require(`../../../assets/imgs/${restaurant.rating}.png`)}
        />
      )
    },
  )
  return <div className="restaurants-card-grid">{restaurant}</div>
}

export default RestaurantCardGrid
