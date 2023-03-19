import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { IDish, Istore } from '../../../services/interface'
import DishCard from '../DishCard/DishCard'
import DishModal from '../DishModal/DishModal'
import './DishCardGrid.css'

interface IDishCardGrid {
  filter: object[]
}

const DishCardGrid: React.FC<IDishCardGrid> = ({ filter }) => {
  const dishes = useSelector((state: Istore) => state.dishes.value)
  const [currentDish, setCurrentDish] = useState<IDish>(dishes[1])

  const [isVisible, setIsVisible] = useState(false)
  
  const handleOpen = (dish: IDish) => {
    setIsVisible(!isVisible)
    setCurrentDish(dish)
  }

  const dish = dishes.map((dish: IDish, index: number) => {
    return (
      <DishCard
        key={index}
        onClick={() => {
          handleOpen(dish)
        }}
        src={require(`../../../assets/imgs/${dish.img}.png`)}
        name={dish.name}
        ingredients={dish.ingredients}
        price={dish.price}
        isSpicy={dish.isSpicy}
        isVegan={dish.isVegan}
        isVegi={dish.isVegitarian}
      />
    )
  })
  return (
    <div className="dishes-card-grid">
      {dish}
      {isVisible ? (
        <DishModal
        id={currentDish.id}
          src={require(`../../../assets/imgs/${currentDish.img}.png`)}
          name={currentDish.name}
          ingredients={currentDish.ingredients}
          isSpicy={currentDish.isSpicy}
          isVegan={currentDish.isVegan}
          isVegi={currentDish.isVegitarian}
          price={currentDish.price}
          sides={currentDish.optionalSides}
          changes={currentDish.optionalChanges}
          close={() => setIsVisible(false)}
        />
      ) : (
        ''
      )}
    </div>
  )
}
export default DishCardGrid
