import React, { useEffect, useState } from 'react'
import './ChefOfTheWeek.css'

import { useSelector } from 'react-redux'
import { IChef, IRestaurant, Istore } from '../../../services/interface'
import ChefCard from '../ChefCard/ChefCard'

const ChefOfTheWeek: React.FC = () => {
  const restaurants = useSelector((state: Istore) => state.restaurants.value)
  const chefs = useSelector((state: Istore) => state.chefs.value)

  const chosenChef = chefs.find((chef: IChef) => chef.isChefOfTheWeek === true)

  const [restArray, setRestArray] = useState<IRestaurant[]>([])

  useEffect(() => {
    chosenChef?.restaurants.map((chefRest: number) => {
      restaurants.map((rest: IRestaurant) => {
        if (rest.id === chefRest) {
          setRestArray((resArr) => [...resArr, rest])
        }
        return null
      })
      return null
    })
  }, [chosenChef?.restaurants, restaurants])

  return (
    <div className="chef-of-the-week">
      <p>CHEF OF THE WEEK:</p>
      <div>
        <ChefCard
          name={
            chosenChef?.firstName + ' ' + chosenChef?.lastName
              ? chosenChef?.firstName + ' ' + chosenChef?.lastName
              : ' '
          }
          src={require(`../../../assets/imgs/${chosenChef?.img}.png`)}
        />
        <p className="chef-info">{chosenChef?.info}</p>
      </div>
      <div className="chef-week-rests">
        <p>{chosenChef?.firstName}'s Restaurants</p>
        <div>
          {restArray.map((rest: IRestaurant, index: number) => (
            <div className="chef-rest-card" key={index}>
              <img
                src={require(`../../../assets/imgs/${rest.img}.png`)}
                alt="chef restaurant"
              ></img>
              <h1>{rest.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChefOfTheWeek
