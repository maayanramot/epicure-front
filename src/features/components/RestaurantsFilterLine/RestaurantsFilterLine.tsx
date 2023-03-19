import React, { useEffect } from 'react'
import './RestaurantsFilterLine.css'

import { useDispatch, useSelector } from 'react-redux'

import downArrow from '../../../assets/icons/down-arrow.svg'
import RestaurantCardGrid from '../RestaurantCardGrid/RestaurantCardGrid'
import { Istore } from '../../../services/interface'
import { restaurantFilter } from '../../../store/slices/restaurantsSlice'

const RestaurantsFilterLine: React.FC = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state: Istore) => state.restaurants.value)

  useEffect(() => {
    dispatch(restaurantFilter('all'))
  }, [dispatch])

  return (
    <div>
      <div className="restaurants-filter-line">
        <button onClick={() => dispatch(restaurantFilter('all'))}>All</button>
        <button onClick={() => dispatch(restaurantFilter('new'))}>New</button>
        <button onClick={() => dispatch(restaurantFilter('mostPopular'))}>
          Most Popular
        </button>
        <button onClick={() => dispatch(restaurantFilter('openNow'))}>
          Open Now
        </button>
        <button onClick={() => dispatch(restaurantFilter('mapView'))}>
          Map View
        </button>
      </div>
      <div className="restaurants-sort-line">
        <button>
          Price Range<img src={downArrow} alt="down arrow"></img>
        </button>
        <button>
          Distance<img src={downArrow} alt="down arrow"></img>
        </button>
        <button>
          Rating<img src={downArrow} alt="down arrow"></img>
        </button>
      </div>
      <div className="center">
        <RestaurantCardGrid filter={filter} />
      </div>
    </div>
  )
}

export default RestaurantsFilterLine
