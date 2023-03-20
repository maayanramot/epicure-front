import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

import logo from '../../assets/icons/logo.svg'
import searchIcon from '../../assets/icons/search.png'
import person from '../../assets/icons/person.svg'
import bag from '../../assets/icons/shopping-bag.png'

import UserDetails from '../../features/components/UserDetails/UserDetails'
import UserName from '../../features/components/UserName/UserName'

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleOpen = () => {
    setIsVisible(!isVisible)
  }
  return (
    <nav>
      <div className="left">
        <NavLink to="/" className="navlink">
          <img src={logo} alt="logo" />
        </NavLink>
        <NavLink to="/restaurants" className="navlink">
          Restaurants
        </NavLink>
        <NavLink to="/chefs" className="navlink">
          Chefs
        </NavLink>
      </div>
      <div className="right">
        <form className="nav-search">
          <input type="search" placeholder="Search..." />
          <button id="searchBtn" type="submit">
            <img src={searchIcon} alt="search logo" />
          </button>
        </form>
        <UserName />
        <NavLink to="/" className="navlink">
          <img src={person} alt="person icon" onClick={handleOpen} />
        </NavLink>
        <NavLink to="/" className="navlink">
          <img src={bag} alt="shopping bag" />
        </NavLink>
      </div>
      {isVisible ? <UserDetails close={() => setIsVisible(false)} /> : ''}
    </nav>
  )
}
export default Navbar
