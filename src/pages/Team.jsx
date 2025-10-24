import React, { memo } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: "Manoj Sahu", role: "Pre Sales Head", image: assets.employee1, experience:"10+ years" },
  { name: "Gurshish Singh", role: "Sales Head", image: assets.employee3, experience:"7+ years" },
  { name: "Kajal Patel", role: "Pre Sales Manager", image: assets.employee2, experience:"8+ years" },
  // Add more members as needed
];

const TeamMemberCard = memo(({ member }) => (
  <div className="relative flex flex-col p-4 bg-gradient-to-b from-gray-100 to-gray-50 rounded-xl shadow-md border border-gray-300 overflow-hidden">
    <div className="relative aspect-square w-full overflow-hidden rounded-xl">
      <img
        src={member.image}
        alt={`${member.name}'s picture`}
        className="absolute inset-0 h-full w-full object-cover rounded-xl transform transition-transform duration-300 hover:scale-105"
        loading="lazy" // Lazy load for performance
      />
    </div>
    <div className="mt-4 px-2 text-center text-gray-800">
      <h2 className="text-lg font-semibold text-gray-900">{member.name}</h2>
      <p className="text-gray-600 text-sm mt-1">{member.role}</p>
      <p className="text-gray-600 text-sm mt-1">{member.experience}</p>
    </div>
  </div>
));

const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Team"
    >
      {/* Heading */}
      <motion.h1
        className="text-2xl sm:text-4xl font-bold mb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet Our <span className="underline underline-offset-4 decoration-1 font-light">Team</span>
      </motion.h1>
      <motion.p
        className="text-center text-gray-500 mb-12 max-w-[320px] mx-auto"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        "Passionate experts transforming visions into remarkable living spaces and unparalleled real estate services."
      </motion.p>

      {/* Team Grid */}
      <div className="grid grid-cols-1 gap-6 py-4 mt-5 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </motion.div>
  );
};

export default memo(Team);
