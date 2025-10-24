import React from 'react'
import {motion} from 'framer-motion';
import Navbar from './Navbar'
const Header = () => {
  return (
    <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden " style={{backgroundImage:"url('/header_img.png')"}} id="Header">
      <Navbar/>
      <motion.div 
      initial={{opacity:0,y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      
      className=' w-full flex flex-col items-center justify-center  text-center  px-6 min-h-[70vh] md:px-20 lg:px-32'>
        <h2 className='text-3xl sm:text-4xl md:text-4xl max-w-3xl font-semibold  text-white leading-snug'>
            LUXURY YOU SEE. TRUST YOU FEEL.
        </h2>
        <h1 className='text-4xl sm:text-4xl md:text-5xl  max-w-4xl font-semibold mt-6 text-yellow-400 leading-snug'>
            BECAUSE TRUE WEALTH IS BUILT ON TRANSPARENCY
        </h1>
      </motion.div>
    </div>
  )
}

export default Header
