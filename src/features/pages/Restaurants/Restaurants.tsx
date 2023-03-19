import React from 'react'
import Footer from '../../../components/Footer/Footer'

import Navbar from '../../../components/Navbar/Navbar'
import RestaurantsFilterLine from '../../components/RestaurantsFilterLine/RestaurantsFilterLine'

const Restaurants: React.FC = () => {
  return (
    <>
      <Navbar />
      <RestaurantsFilterLine />
      <Footer />
    </>
  )
}
export default Restaurants
