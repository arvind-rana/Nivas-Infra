import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const About = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden "
      id="About"
    >
      <h1 className=" mb-3 text-2xl sm:text-4xl font-bold ">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-90 text-center mb-8 text-lg">
        Passionate About Properties, Dedicated to Your Vision{" "}
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:gap-20 w-full">
        <div className="flex justify-center items-center md:w-[50%]">
          <img
            src={assets.About_image}
            className="w-full justify-center items-center mt-14  rounded-md"
          ></img>
        </div>
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl md:text-5xl font-extrabold text-gray-800 flex items-center">
                10
                <span className="ml-1 text-3xl md:text-4xl font-extrabold">
                  +
                </span>
              </p>
              <p className="md:text-lg font-semibold">Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold text-gray-800 flex items-center">
                100
                <span className="ml-1 text-3xl md:text-4xl font-extrabold">
                  +
                </span>
              </p>
              <p className="md:text-lg font-semibold">Properties Sold</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold text-gray-800 flex items-center">
                50
                <span className="ml-1 text-3xl md:text-4xl font-extrabold">
                  +
                </span>
              </p>
              <p className="md:text-lg font-semibold">Channel Partners</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold text-gray-800 flex items-center">
                20
                <span className="ml-1 text-3xl md:text-4xl font-extrabold">
                  +
                </span>
              </p>
              <p className="md:text-lg font-semibold">Real Estate Awards</p>
            </div>
          </div>

          <p className="my-10 max-w-lg text-base md:text-lg lg:text-lg leading-8">
            <span className="font-bold text-black">
              We Help You Buy, Occupy & Invest in Premium Real Estate Assets.{" "}
              <br />
            </span>
            <span className="font-bold text-blue-500 text-lg">
              At Nivas Infra
            </span>
            , we go beyond property sales — we craft lifestyles and open doors
            to exceptional opportunities. With deep expertise in luxury real
            estate consulting across Gurgaon and Delhi NCR, we specialize in
            exclusive residences, luxury low-rise floors, and high-value
            commercial spaces that redefine modern living and investment.
          </p>
          <button
            onClick={() => navigate("/about-us")}
            className="bg-blue-600 text-white px-8 py-2 rounded-md hover:cursor-pointer"
          >
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
