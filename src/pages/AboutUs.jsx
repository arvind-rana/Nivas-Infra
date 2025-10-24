import React, { memo } from "react";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <div
      className="relative flex items-center w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: "url('/background_img.jpeg')" }}
    >
      <Navbar />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 px-6 sm:px-12 md:px-16 lg:px-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default memo(AboutUs);
