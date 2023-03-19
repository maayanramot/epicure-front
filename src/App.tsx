import React from 'react'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from './features/pages/Home/Home'
import Restaurants from './features/pages/Restaurants/Restaurants'
import RestaurantPage from './features/pages/RestaurantPage/RestaurantPage'
import Chefs from './features/pages/Chefs/Chefs'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/restaurants" element={<Restaurants />}></Route>
          <Route path="/restaurants/:id" element={<RestaurantPage />}></Route>
          <Route path="/chefs" element={<Chefs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
