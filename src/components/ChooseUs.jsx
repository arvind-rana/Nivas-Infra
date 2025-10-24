import React from 'react'
import {motion} from 'framer-motion';
import { FaCertificate, FaHandshake, FaGem, FaUsers, FaChartLine, FaPeopleGroup } from "react-icons/fa6";

const ChooseUs = () => {

    const features = [
    {
      icon: <FaCertificate className="text-4xl text-[#1E3A8A]" />,
      title: "Certified RERA, Trusted Real Estate Partners",
      desc: "Built on trust and compliance, we ensure every investment meets the highest standards of safety and transparency.",
    },
    {
      icon: <FaHandshake className="text-4xl text-[#1E3A8A]" />,
      title: "Trusted Partnerships with Leading Developers",
      desc: "Collaborating with top builders to deliver premium properties and exclusive investment opportunities.",
    },
    {
      icon: <FaGem className="text-4xl text-[#1E3A8A]" />,
      title: "100% Transparency, Zero Hidden Costs",
      desc: "With Nivas Infra, every transaction is straightforward and trustworthy, ensuring complete peace of mind.",
    },
    {
      icon: <FaUsers className="text-4xl text-[#1E3A8A]" />,
      title: "Personalized Client Assistance",
      desc: "Our team is committed to understanding your vision and offering tailored support at every stage of your real estate journey.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#1E3A8A]" />,
      title: "Strategic Portfolio Planning",
      desc: "Personalized insights to align your property investments with long-term growth and financial success.",
    },
    {
      icon: <FaPeopleGroup className="text-4xl text-[#1E3A8A]" />,
      title: "Complete Real Estate Assistance",
      desc: "From property exploration to final handover — we ensure a smooth, transparent, and hassle-free experience at every step.",
    },
  ];

  return (
    
    <motion.section
      id="ChooseUs"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#F9FAFB] py-16 px-6 md:px-16 lg:px-28 text-center"
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        WHY <span className='underline underline-offset-4 decoration-1 under font-light'>CHOOSE US!</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>"Your Lifestyle, Our Expertise"</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-8 text-center border border-gray-100"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h4 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default ChooseUs
