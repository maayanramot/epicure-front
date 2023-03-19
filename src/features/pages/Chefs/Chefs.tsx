import React from 'react'
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'
import ChefFilterLine from '../../components/ChefFilterLine/ChefFilterLine'

const Chefs: React.FC = () => {
  return (
    <>
      <Navbar />
      <ChefFilterLine />
      <Footer />
    </>
  )
}

export default Chefs
