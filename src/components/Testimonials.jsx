import React from 'react'
import './Testimonials.css'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'motion/react'

const Testimonials = () => {
  return (
    <motion.div id='Testimonials' className='about' initial={{opacity:0, y:200}} transition={{duration:1.5}} whileInView={{opacity:1,y:0}} viewport={{once:true}} >
      <h1>Customer <span>Testimonials</span></h1>
      <p>Real Stories from Those Who Found Home <br /> with Us</p>

      <div className="testimonials-array">
        {testimonialsData.map((testimonials,index)=>{
           return <div key={index} className='dd'>
                <img className='i' src={testimonials.image} alt="" />
                <h2>{testimonials.name}</h2>
                <p>{testimonials.title}</p>
                <div className='ddk'>
                    {Array.from({length: testimonials.rating},(item,index)=>{
                      return  <img key={index} src={assets.star_icon} alt="" />
                    })}
                </div>
                <p>{testimonials.text}</p>
            </div>
        })}
      </div>
    </motion.div>
  )
}

export default Testimonials
