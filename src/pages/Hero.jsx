import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full py-20 md:py-28 bg-gray-100"
      id="hero"
    >
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT IMAGE */}
          <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={assets.Manoj_Sahrawat}
              alt="Manoj Sharawat"
              className="w-full h-full object-contain bg-center bg-no-repeat"
            />
            <div className="absolute inset-0 bg-black/2"></div>
          </div>

          {/* RIGHT TEXT */}
          <div className="w-full lg:w-1/2 text-gray-700">
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 leading-snug mb-5">
              <span className="text-blue-600">Founder</span>
            </h2>

            <div className="space-y-4 text-base md:text-base lg:text-lg leading-relaxed">
              <p>
                At <span className="font-semibold text-blue-600">Nivas Infra,</span> we believe real estate is more than properties—it’s about creating lifestyles and unlocking opportunities.
              </p>

              <p>
                With a focus on Gurgaon and Delhi NCR, we specialize in luxury residences, low-rise floors, and high-value commercial spaces that combine modern design with smart investment potential. Our team guides clients through every step of the journey, delivering expert advice, innovative solutions, and personalized experiences. Whether you’re buying your dream home or exploring investment opportunities, Nivas Infra ensures every decision adds lasting value and elevates your way of living.
              </p>
            </div>

            <div className="mt-5">
              <h3 className="text-black font-bold text-lg md:text-xl lg:text-xl">
                Mr. Manoj Sharawat
              </h3>
              <p className="text-gray-700 md:text-base lg:text-base">Founder and CEO</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
