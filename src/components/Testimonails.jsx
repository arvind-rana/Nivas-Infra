import React from 'react';
import { testimonialsData, assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='container mx-auto px-6 py-10 md:px-16 lg:px-32 w-full overflow-hidden'
      id='Testimonials'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-md sm:max-w-lg mx-auto'>
        Real Stories from Those Who Found Home with Us
      </p>

      <div className='flex flex-wrap justify-center gap-6 sm:gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div 
            key={index} 
            className='w-full sm:w-80 md:w-96 bg-white shadow-2xl rounded-2xl px-6 py-10 text-center hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] transition'
          >
            <img 
              className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4' 
              src={testimonial.image} 
              alt={testimonial.alt} 
            />
            <h2 className='text-xl sm:text-2xl text-gray-700 font-medium'>{testimonial.name}</h2>
            <p className='text-gray-500 text-sm sm:text-base mb-2'>{testimonial.title}</p>
            <div className='flex justify-center gap-0.5 sm:gap-1 text-red-500 mb-4'>
              {Array.from({ length: testimonial.rating }, (_, idx) => (
                <img key={idx} src={assets.star_icon} alt="star" className="w-4 h-4 sm:w-5 sm:h-5" />

              ))}
            </div>
            <p className='text-gray-600 text-sm sm:text-base'>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
