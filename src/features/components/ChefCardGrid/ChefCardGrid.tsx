import React, { useState } from 'react'
import './ChefCardGrid.css'

import ChefCard from '../ChefCard/ChefCard'

import { useSelector } from 'react-redux'
import { IChef, Istore } from '../../../services/interface'

interface IChefCardGrid {
  filter: object[]
}

const ChefCardGrid: React.FC<IChefCardGrid> = ({ filter }) => {
  const chefs = useSelector((state: Istore) => state.chefs.value)
  const [currentChef, setCurrentChef] = useState<IChef>(chefs[1])

  const handleOpen = (chef: IChef) => {
    setCurrentChef(chef)
  }

  const chef = chefs.map((chef: IChef, index: number) => {
    return (
      <div key={index}>
        <ChefCard
          onClick={() => {
            handleOpen(chef)
          }}
          chefClickedId={currentChef._id}
          src={require(`../../../assets/imgs/${chef.img}.png`)}
          name={chef.firstName + ` ` + chef.lastName}
        />
      </div>
    )
  })
  return <div className="chef-card-grid">{chef}</div>
}

export default ChefCardGrid
