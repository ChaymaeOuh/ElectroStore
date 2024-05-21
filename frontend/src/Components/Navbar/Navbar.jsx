import React from 'react'
import './Navbar.css'

import logo from '../Assets/logo-col.png'
import cart_icon from '../Assets/cart_icon.svg'


const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        </div>
        <ul className='nav-manu'>
          <li>Small Appliance</li>
          <li>Major Appliance</li>
          <li>Health _ Beauty</li>
          <li>Home Comfort</li>
          <li>TV _ Photo</li>
          <li>Computer</li>
          <li>Smartphone _ Tablet</li>
          <li>Gaming</li>
        </ul>
        <div className='nav-login-cart'>
          <button>Login</button>
          <img src={cart_icon} alt='' />
        </div>
    </div>
  )
}

export default Navbar
