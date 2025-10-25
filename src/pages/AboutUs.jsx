import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";

const AboutUs = () => {
  return (
    <div
      className="relative bg-black/50 z-10 mb-4 bg-cover  bg-center flex items-center w-full overflow-hidden h-[400px] sm:h-[500px] md:h-[600px]"
      style={{ backgroundImage: "url('/background_img.jpeg')" }}
      id="AboutUs"
    >
      <Navbar />
      {/* Hero section   */}
<div className='absolute inset-0 bg-black/50 z-10'></div>

       <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20  w-full px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;