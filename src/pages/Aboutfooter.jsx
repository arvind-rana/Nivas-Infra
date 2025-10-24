import React, { memo } from 'react';
import { assets } from '../assets/assets';

const socialLinks = [
  { href: 'https://www.instagram.com/infra_nivas/', img: assets.instagram, alt: 'Instagram' },
  { href: 'https://www.facebook.com/profile.php?id=61582072835938', img: assets.facebook, alt: 'Facebook' },
  { href: 'https://www.linkedin.com/in/nivas-infra-29338438a/', img: assets.linkedin, alt: 'LinkedIn' },
  { href: 'https://youtube.com/@nivasinfra?si=8_9XCVOlhsfkIT_z', img: assets.youtube, alt: 'YouTube' },
];

const AboutFooter = () => {
  return (
    <footer className='mt-4 pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      {/* Top Section */}
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0'>
        
        {/* Logo & Description */}
        <div className='flex-1'>
          <img src={assets.NivasInfra} alt="Nivas Infra Logo" className='h-16 lg:h-20 mb-4' loading="lazy" />
          <p className='text-gray-400'>
            “At Nivas Infra, we go beyond property sales, crafting lifestyles and unlocking premium real estate opportunities across Gurgaon and Delhi NCR.”
          </p>
        </div>

        {/* Company Links */}
        <div className='flex-1'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <a href='#Header' className='hover:text-white'>Home</a>
            <a href='#About' className='hover:text-white'>About Us</a>
            <a href='#Contact' className='hover:text-white'>Contact Us</a>
            <a href='#' className='hover:text-white'>Privacy Policy</a>
          </ul>
        </div>

        {/* Social Links + Subscribe */}
        <div className='flex-1'>
          <h3 className='text-white text-lg font-bold mb-2'>Join Us On</h3>
          <div className='flex items-center gap-3 mb-4'>
            {socialLinks.map((social) => (
              <a key={social.alt} href={social.href} target='_blank' rel='noopener noreferrer'>
                <img src={social.img} alt={social.alt} className='w-6 h-6 hover:scale-110 transition-transform duration-200' loading="lazy"/>
              </a>
            ))}
          </div>

          <div className='flex flex-col md:flex-row gap-2'>
            <input
              type='email'
              placeholder='Enter your email'
              className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none flex-1'
            />
            <button className='py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 transition w-full md:w-auto'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500 text-sm'>
        © 2025 Nivas Infra. All Rights Reserved.
      </div>
    </footer>
  );
};

export default memo(AboutFooter);
