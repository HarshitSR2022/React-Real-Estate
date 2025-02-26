import React from 'react'
import './Navbar.css'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="content">
        <img src={assets.logo} alt="" />
        <ul>
            <a href="#Header">Home</a>
            <a href="#About">About</a>
            <a href="#Projects">Projects</a>
            <a href="#Testimonials">Testimonials</a>
        </ul>
        <button>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
