import React, { memo } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-20 md:py-32 bg-gray-100"
      id="hero"
    >
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* IMAGE SECTION */}
          <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[320px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={assets.Manoj_Sahrawat}
              alt="Manoj Sharawat"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* TEXT SECTION */}
          <div className="w-full lg:w-1/2 text-gray-700">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            >
              <span className="text-blue-600">Founder</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-base leading-relaxed"
            >
              <p>
                At <span className="font-semibold text-blue-600">Nivas Infra,</span> we believe real estate is more than properties—it’s about creating lifestyles and unlocking opportunities.
              </p>
              <p>
                With a focus on Gurgaon and Delhi NCR, we specialize in luxury residences, low-rise floors, and high-value commercial spaces. Our team guides clients through every step of the journey, delivering expert advice, innovative solutions, and personalized experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='mt-6'
            >
              <h3 className='text-black font-bold text-xl'>Mr. Manoj Sharawat</h3>
              <p>Founder and CEO</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default memo(Hero);
