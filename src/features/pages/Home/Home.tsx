import React from 'react'
import Footer from '../../../components/Footer/Footer'

import Navbar from '../../../components/Navbar/Navbar'
import AboutUs from '../../components/AboutUs/AboutUs'
import ChefOfTheWeek from '../../components/ChefOfTheWeek/ChefOfTheWeek'
import Hero from '../../components/Hero/Hero'
import IconMeaning from '../../components/IconsMeaning/IconsMeaning'
import PopularRestaurants from '../../components/PopularRestaurants/PopularRestaurants'
import SignatureDish from '../../components/SignatureDish/SignatureDish'

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
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
