import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'
import { IRestaurant, Istore } from '../../../services/interface'
import RestaurantPageFilterLine from '../../components/RestaurantPageFilterLine/RestaurantPageFilterLine'
import RestaurantPageHeader from '../../components/RestaurantPageHeader/RestaurantPageHeader'

const RestaurantPage: React.FC = () => {
  const [data, setData] = useState('')

  try {
    const response = fetch('http://localhost:8000/epicure/users/userData', {
      method: 'POST',
      body: JSON.stringify({ token: window.localStorage.getItem('token') }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'user data')
        setData(data.data.firstName)
      })
  } catch (e) {
    console.log(e)
  }

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
      <Navbar firstUserName={data} />
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
