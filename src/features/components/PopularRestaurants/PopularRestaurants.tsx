import React, { useEffect } from 'react'
import './PopularRestaurants.css'

import { useDispatch, useSelector } from 'react-redux/es/exports'

import arrows from '../../../assets/icons/arrows.svg'
import { Istore } from '../../../services/interface'
import { restaurantFilter } from '../../../store/slices/restaurantsSlice'
import RestaurantCardGrid from '../RestaurantCardGrid/RestaurantCardGrid'
import { NavLink } from 'react-router-dom'

const PopularRestaurants: React.FC = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state: Istore) => state.restaurants.value)

  useEffect(() => {
    dispatch(restaurantFilter('mostPopular'))
  }, [dispatch])
  
  return (
    <div className="center">
      <div className="popular">
        <p>POPUALR RESTAURANT IN EPICURE:</p>
        <div>
          <RestaurantCardGrid filter={filter} />
        </div>
        <NavLink to="/restaurants">
          <button>
            All Restaurants<img src={arrows} alt="arrows"></img>
          </button>
        </NavLink>
      </div>
    </div>
  )
}
export default PopularRestaurants
