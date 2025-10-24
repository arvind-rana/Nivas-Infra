import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center container mx-auto px-6 py-12 md:px-20 lg:px-32 w-full overflow-hidden'
      id='About'
    >
      <h1 className='mb-3 text-2xl sm:text-4xl font-bold'>
        About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span>
      </h1>

      <p className='text-gray-500 max-w-2xl text-center mb-8 text-lg'>
        Passionate About Properties, Dedicated to Your Vision
      </p>

      <div className='flex flex-col md:flex-row items-center justify-center md:items-start md:gap-20 w-full'>
        {/* Image Section */}
        <div className='flex justify-center items-center md:w-1/2'>
          <img 
            src={assets.About_image} 
            alt="About Nivas Infra" 
            className='w-full h-auto mt-8 md:mt-14 rounded-md object-cover'
          />
        </div>

        {/* Content Section */}
        <div className='flex flex-col items-center text-center md:items-start md:text-left mt-10 text-gray-600'>
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>100+</p>
              <p>Properties Sold</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>50+</p>
              <p>Channel Partners</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>Real Estate Awards</p>
            </div>
          </div>

          <p className='my-10 max-w-lg leading-8'>
            <span className='font-bold text-black'>
              We Help You Buy, Occupy & Invest in Premium Real Estate Assets. <br />
            </span>
            <span className='font-bold text-blue-500 text-lg'>At Nivas Infra</span>, we go beyond property sales — 
            we craft lifestyles and open doors to exceptional opportunities. With deep expertise in luxury real estate consulting 
            across Gurgaon and Delhi NCR, we specialize in exclusive residences, luxury low-rise floors, and high-value commercial 
            spaces that redefine modern living and investment.
          </p>

          <button 
            onClick={() => navigate('/about-us')} 
            className='bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200'
          >
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default About
