import React from 'react'
import './Header.css'
import Navbar from './Navbar'
import { motion } from 'motion/react'

const Header = () => {
  return (
    <div className='container' id='Header'>
      <Navbar/>
        <motion.div className='ce' initial={{opacity:0, y:200}} transition={{duration:1.5}} whileInView={{opacity:1,y:0}} viewport={{once:true}} >
            <h2>Explore homes that <br /> fit your dreams</h2>
            <div className='con'>
                <a href="#Projects" className='p'>Projects</a>
                <a href="#Contact" className='cu'>Contact Us</a>
            </div>
        </motion.div>
    </div>
  )
}

export default Header
