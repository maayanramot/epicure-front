import React, { useEffect } from 'react'
import './RestaurantPageFilterLine.css'

import { useDispatch, useSelector } from 'react-redux'
import { Istore } from '../../../services/interface'
import { dishFilter } from '../../../store/slices/dishesSlice'
import DishCardGrid from '../DishCardGrid/DishCardGrid'

const RestaurantPageFilterLine: React.FC = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state: Istore) => state.dishes.value)

  useEffect(() => {
    dispatch(dishFilter('breakfast'))
  }, [dispatch])

  return (
    <div className="restaurant-page-filter-line">
      <div>
        <button className='res-btn' onClick={() => dispatch(dishFilter('breakfast'))}>
          Breakfast
        </button>
        <button className='res-btn' onClick={() => dispatch(dishFilter('launch'))}>Launch</button>
        <button className='res-btn' onClick={() => dispatch(dishFilter('dinner'))}>Dinner</button>
      </div>
      <div className="center">
        <DishCardGrid filter={filter} />
      </div>
    </div>
  )
}

export default RestaurantPageFilterLine
