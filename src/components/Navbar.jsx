import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  // Smooth scroll to section
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "Home", section: "Header" },
    { name: "About", section: "About" },
    { name: "Properties", section: "Projects" },
    { name: "Testimonials", section: "Testimonials" },
    {
      name: "Contact Us",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSePSRx7_OvqGvy3aVZN4h8iTMVc75oHjws_DBNbA_YIcKJUOg/viewform?usp=dialog",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-center py-2 px-4 sm:px-6 md:px-12 lg:px-32">
        {/* Logo */}
        <img
          onClick={() => handleScroll("Header")}
          src={assets.NivasInfra}
          alt="Nivas-Infra"
          className="w-[160px] sm:w-[200px] md:w-[220px] lg:w-[250px] cursor-pointer object-contain"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 sm:gap-8 lg:gap-10 text-white text-base sm:text-lg lg:text-xl font-medium">
          {navItems.slice(0, 4).map((item) => (
            <li
              key={item.name}
              onClick={() => handleScroll(item.section)}
              className="hover:text-gray-400 transition cursor-pointer"
            >
              {item.name.toUpperCase()}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <a
          href={navItems[4].link}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-black font-semibold shadow-md hover:bg-gray-200 transition"
        >
          CONTACT US
        </a>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-6 sm:w-7 cursor-pointer"
          alt="Menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-full bg-white z-50 transform transition-transform duration-300 ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            className="w-6"
            src={assets.cross_icon}
            alt="Close Menu"
          />
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col items-center gap-6 mt-10 text-black text-base sm:text-lg font-medium px-4">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="px-6 py-3 w-full text-center hover:bg-gray-100 rounded-lg cursor-pointer transition"
              onClick={() => {
                if (item.link) {
                  window.open(item.link, "_blank");
                } else {
                  handleScroll(item.section);
                }
                setShowMobileMenu(false);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
