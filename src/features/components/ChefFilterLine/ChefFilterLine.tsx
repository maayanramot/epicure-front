import React, { useEffect } from 'react'
import './ChefFilterLine.css'
import { useDispatch, useSelector } from 'react-redux'
import { Istore } from '../../../services/interface'
import { chefsFilter } from '../../../store/slices/chefSlice'
import ChefCardGrid from '../ChefCardGrid/ChefCardGrid'

const ChefFilterLine: React.FC = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state: Istore) => state.chefs.value)

  useEffect(() => {
    dispatch(chefsFilter('all'))
  }, [dispatch])
  return (
    <div className="chefs-filter-line">
      <div>
        <button
          onClick={() => {
            dispatch(chefsFilter('all'))
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            dispatch(chefsFilter('new'))
          }}
        >
          New
        </button>
        <button
          onClick={() => {
            dispatch(chefsFilter('mostViewed'))
          }}
        >
          Most Viewd
        </button>
      </div>
      <div>
        <ChefCardGrid filter={filter} />
      </div>
    </div>
  )
}

export default ChefFilterLine
