import React, { useState } from 'react'
import Footer from '../../../components/Footer/Footer'

import Navbar from '../../../components/Navbar/Navbar'
import RestaurantsFilterLine from '../../components/RestaurantsFilterLine/RestaurantsFilterLine'

const Restaurants: React.FC = () => {
  const [data, setData] = useState('')

  try {
    const response = fetch('https://epicure-front-deploy.onrender.com/epicure/users/userData', {
      method: 'POST',
      body: JSON.stringify({ token: window.localStorage.getItem('token') }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.firstName)
      })
  } catch (e) {
    console.log(e)
  }

  return (
    <>
      <Navbar firstUserName={data} />
      <RestaurantsFilterLine />
      <Footer />
    </>
  )
}
export default Restaurants
