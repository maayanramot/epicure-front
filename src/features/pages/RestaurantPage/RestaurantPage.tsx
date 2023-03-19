import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'
import { IRestaurant, Istore } from '../../../services/interface'
import RestaurantPageFilterLine from '../../components/RestaurantPageFilterLine/RestaurantPageFilterLine'
import RestaurantPageHeader from '../../components/RestaurantPageHeader/RestaurantPageHeader'

const RestaurantPage: React.FC = () => {
  const { id } = useParams()
  const restaurants = useSelector((state: Istore) => state.restaurants.value)
  const currentRestaurant = restaurants.find(
    (restaurant: IRestaurant) => restaurant.id === Number(id),
  )
  const currentTime = new Date()
  const hour = currentTime.getHours()
  const isOpen = () => {
    return hour >= Number(currentRestaurant?.OpeningTime) &&
      hour <= Number(currentRestaurant?.ClosingTime)
      ? 'open now'
      : 'Closed now'
  }

  return (
    <>
      <Navbar />
      <RestaurantPageHeader
        src={currentRestaurant?.img}
        name={currentRestaurant?.name}
        chef={currentRestaurant?.chef}
        isOpen={isOpen()}
      />
      <RestaurantPageFilterLine />
      <Footer />
    </>
  )
}

export default RestaurantPage
