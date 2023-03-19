import React from 'react'
import './ChefCard.css'

interface IChefCard {
  src: string
  name: string
}

const ChefCard: React.FC<IChefCard> = ({ src, name }) => {
  return (
    <div className="chef-card">
      <img src={src} alt="chef img"></img>
      <div className="frame">
        <p>{name}</p>
      </div>
    </div>
  )
}

export default ChefCard
