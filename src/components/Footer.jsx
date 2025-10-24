import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      {/* first div  */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img
            src={assets.NivasInfra}
            alt=""
            className="lg:h-20 sm:h-16 md:h-16"
          ></img>
          <p className="text-gray-400 mt-4">
            “At Nivas Infra, we go beyond property sales, crafting lifestyles
            and unlocking premium real estate opportunities across Gurgaon and
            Delhi NCR.”
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About Us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-2">JOIN US ON</h3>
          <ul className="flex items-center gap-3 mb-4">
            <li>
              <a
                href="https://www.instagram.com/infra_nivas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={assets.instagram}
                  alt="Instagram"
                  className="w-6 h-6 md:w-6 md:h-6 hover:scale-110 transition-transform duration-200"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61582072835938"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={assets.facebook}
                  alt="Facebook"
                  className="w-6 h-6 md:w-6 md:h-6 hover:scale-110 transition-transform duration-200"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nivas-infra-29338438a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={assets.linkedin}
                  alt="LinkedIn"
                  className="w-6 h-6 md:w-6 md:h-6 hover:scale-110 transition-transform duration-200"
                />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/@nivasinfra?si=8_9XCVOlhsfkIT_z"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={assets.youtube}
                  alt="YouTube"
                  className="w-6 h-6 md:w-6 md:h-6 hover:scale-110 transition-transform duration-200"
                />
              </a>
            </li>
          </ul>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            ></input>
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* second div  */}
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 © Nivas Infra. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
