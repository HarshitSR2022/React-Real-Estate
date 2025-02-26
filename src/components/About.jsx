import React from 'react'
import './About.css'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const About = () => {
  return (
    <motion.div className='about' id='About' initial={{opacity:0, y:200}} transition={{duration:1.5}} whileInView={{opacity:1,y:0}} viewport={{once:true}} >
        <h1>About <span>Our Brand</span></h1>
        <p>Passionate About Properties, Dedicate to <br /> Your Vision</p>
        <div className="ac">
            <img src={assets.brand_img} alt="" />
            <div className='acc'>
                <div className="accc">
                    <div className='k'>
                        <p className='p'>10+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div className='k'>
                        <p className='p'>12+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div className='k'>
                        <p className='p'>20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div className='k'>
                        <p className='p'>25+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                <p className='kp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam molestias blanditiis officia rem, explicabo perferendis iure adipisci sit nesciunt architecto quos. Esse laudantium dolorem modi non dolor. Consectetur, deleniti! </p>
                <button className='b'>Learn More</button>
            </div>
        </div>
    </motion.div>
  )
}

export default About
