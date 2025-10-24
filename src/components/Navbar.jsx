import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showMobileMenu]);

  // Smooth scroll to section (after navigating home)
  const handleScroll = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="flex justify-between items-center py-3 px-5 sm:px-8 lg:px-24">
        {/* Logo */}
        <img
          onClick={() => handleScroll("Header")}
          src={assets.NivasInfra}
          alt="Nivas Infra Logo"
          className="w-[150px] sm:w-[180px] md:w-[200px] lg:w-[230px] cursor-pointer object-contain hover:opacity-80 transition"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-white text-base lg:text-lg font-medium">
          {navItems.slice(0, 4).map((item) => (
            <li
              key={item.name}
              onClick={() => handleScroll(item.section)}
              className="hover:text-gray-300 transition cursor-pointer"
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
          className="hidden md:inline-block bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition shadow-sm"
        >
          CONTACT US
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMobileMenu(true)}
          aria-label="Open Menu"
          className="md:hidden text-white w-7 h-7 flex items-center justify-center"
        >
          {/* SVG icon — no load delay */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-all duration-300 ease-in-out ${
          showMobileMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setShowMobileMenu(false)}
            aria-label="Close Menu"
            className="text-gray-700 w-7 h-7 flex items-center justify-center hover:opacity-70"
          >
            {/* SVG close icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col items-center gap-6 mt-8 text-gray-900 text-lg font-medium">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="w-full text-center py-3 hover:bg-gray-100 rounded-lg transition"
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
