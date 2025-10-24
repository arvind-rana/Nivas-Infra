import { useState, useEffect } from 'react';
import React from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
      } else if(window.innerWidth >= 640){
        setCardsToShow(2);
      }
      else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      {/* Section Title */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
      Luxury{' '}
        <span className="underline underline-offset-4 decoration-1 under font-light">
         Properties
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      {/* Project Slider Container */}
      <div className="relative flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={prevProject}
          className="absolute left-0 z-10 p-3 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" className="w-5 h-5" />
        </button>

        {/* Slider */}
        <div className="overflow-hidden w-full sm:w-3/4">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            }}
          >
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[90%] mb-10 rounded-xl shadow-lg"
                />
                <div className="absolute left-0 right-0 bottom-4 flex justify-center">
                  <div className="inline-block bg-white w-3/4 px-4 py-3 shadow-md rounded-md">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {project.price}{' '}
                      <span className="px-1 text-gray-400">|</span>{' '}
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextProject}
          className="absolute right-0 z-10 p-3 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default Projects;
