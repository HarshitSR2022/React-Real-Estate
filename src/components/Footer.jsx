import React from 'react'
import './Footer.css'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div id='Footer' className='footer'>
      <div className='footer1'>
        <div className='footer2'>
            <img src={assets.logo_dark} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ea amet assumenda sequi, architecto accusamus.</p>
        </div>
        <div className='footer3'>
            <h3>Company</h3>
            <ul>
                <a href="#Header">Home</a>
                <a href="#About">About us</a>
                <a href="#Contact">Contact us</a>
                <a href="#">Privacy policy</a>
            </ul>
        </div>
        <div className='footer4'>
            <h3>Subscribe to our newsletter</h3>
            <p>The latest news, articles, and resources, sent <br /> to your inbox weekly</p>
            <div className="inputzz">
                <input type="email" name="email" placeholder='Enter your email' id="" />
                <button>Subscribe</button>
            </div>
        </div>
      </div>
      <div className='footer5'>
        <p>Copyright 2025 &copy; HSR. All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
