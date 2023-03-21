import React, { useState } from 'react'
import Footer from '../../../components/Footer/Footer'

import Navbar from '../../../components/Navbar/Navbar'
import AboutUs from '../../components/AboutUs/AboutUs'
import ChefOfTheWeek from '../../components/ChefOfTheWeek/ChefOfTheWeek'
import Hero from '../../components/Hero/Hero'
import IconMeaning from '../../components/IconsMeaning/IconsMeaning'
import PopularRestaurants from '../../components/PopularRestaurants/PopularRestaurants'
import SignatureDish from '../../components/SignatureDish/SignatureDish'

const Home: React.FC = () => {
  const [data, setData] = useState('Guest')

  // try {
  //   const response = fetch(
  //     'https://web-server-hmw0.onrender.com/epicure/users/userData',
  //     {
  //       method: 'POST',
  //       body: JSON.stringify({ token: window.localStorage.getItem('token') }),
  //       headers: {
  //         'Content-type': 'application/json; charset=UTF-8',
  //       },
  //     },
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.data.firstName)
  //     })
  // } catch (e) {
  //   console.log(e)
  // }

  return (
    <>
      <Navbar firstUserName={data} />
      <Hero />
      <PopularRestaurants />
      <SignatureDish />
      <IconMeaning />
      <ChefOfTheWeek />
      <AboutUs />
      <Footer />
    </>
  )
}

export default Home
