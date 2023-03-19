import React from 'react'
import './RestaurantPageHeader.css'

import clockIcon from '../../../assets/icons/clock.svg'

interface IRestaurantPageHeader {
  src: string | undefined
  name: string | undefined
  chef: string | undefined
  isOpen: string
}

const RestaurantPageHeader: React.FC<IRestaurantPageHeader> = ({
  src,
  name,
  chef,
  isOpen,
}) => {
  return (
    <div className="restaurant-page-header">
      <img src={require(`../../../assets/imgs/${src}.png`)} alt={name}></img>
      <div className="headlines">
        <h1>{name}</h1>
        <h2>{chef}</h2>
      </div>
      <div className="is-open">
        <img src={clockIcon} alt={'clock icon'}></img>
        <span>{isOpen}</span>
      </div>
    </div>
  )
}

export default RestaurantPageHeader
