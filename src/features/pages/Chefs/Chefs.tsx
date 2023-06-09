import React, { useState } from 'react'
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'
import ChefFilterLine from '../../components/ChefFilterLine/ChefFilterLine'

const Chefs: React.FC = () => {
  const [data, setData] = useState('Guest')

  // try {
  //   const response = fetch('https://web-server-hmw0.onrender.com/epicure/users/userData', {
  //     method: 'POST',
  //     body: JSON.stringify({ token: window.localStorage.getItem('token') }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
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
      <ChefFilterLine />
      <Footer />
    </>
  )
}

export default Chefs
