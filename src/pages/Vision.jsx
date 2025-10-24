import React, { memo } from "react";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section className="relative overflow-hidden py-20 mt-12 bg-gradient-to-tr from-[#fdf6e3] via-[#fff9f0] to-[#fdf6e3]" id="Vision">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-yellow-200 opacity-10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-yellow-100 opacity-5 filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-[#b48a43] mb-8 uppercase tracking-wide inline-block relative"
        >
          Our Vision
          <span className="absolute -bottom-2 left-1/2 w-20 h-1 bg-gradient-to-r from-[#b48a43] to-[#ffd700] rounded transform -translate-x-1/2"></span>
        </motion.h2>

        {/* Main Text */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#5a4d3a] text-lg sm:text-xl leading-relaxed mb-10 px-4"
        >
          At Nivas Infra, we strive to redefine the real estate experience in India by delivering tailored, insight-driven solutions. Our mission is to empower every client with confidence, clarity, and unmatched opportunities, transforming investments into enduring legacies and creating homes that reflect refined lifestyles.
        </motion.p>

        {/* Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#fff7e5] p-8 rounded-2xl shadow-md border-l-4 border-[#b48a43] mx-4 sm:mx-0 transition-transform hover:scale-[1.01] duration-300"
        >
          <div className="text-[3rem] text-[#b48a43] opacity-80 mb-4 font-serif leading-none">“</div>
          <p className="text-[#4b3f2e] italic font-medium text-lg sm:text-xl mb-4">
            Real estate thrives on trust, innovation, and meaningful experiences — and at Nivas Infra, we are dedicated to building that legacy for every client.
          </p>
          <div className="text-right">
            <span className="text-[#b48a43] font-semibold uppercase text-sm tracking-wide">
              Management, Nivas Infra
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Vision);
