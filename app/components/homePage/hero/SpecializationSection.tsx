import React from 'react';
import { motion } from 'framer-motion';
import {
  MdOutlineHomeWork,
  MdOutlineApartment,
  MdOutlineDesignServices,
  MdOutlineLandscape,
  MdOutlinePlumbing,
  MdOutlineArchitecture
} from 'react-icons/md';

const SpecializationSection = () => {
  const items = [
    { icon: MdOutlineHomeWork, text: "Residential Architecture" },
    { icon: MdOutlineApartment, text: "Commercial Projects" },
    { icon: MdOutlineDesignServices, text: "Interior Planning" },
    { icon: MdOutlineLandscape, text: "Landscape Design" },
    { icon: MdOutlinePlumbing, text: "Renovation Project" },
    { icon: MdOutlineArchitecture, text: "Free Consultation" }
  ];

  return (

    <div className="absolute top-1/2 inset-0 w-fit left-1/2 z-10 md:block hidden">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        animate={{
          y: [0, -5, 0],
          transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
          },
        }}
        className="grid grid-cols-2 gap-4 bg-white rounded-2xl p-6 shadow-lg"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.1,
              rotate: 3,
              boxShadow: "0px 8px 20px rgba(128, 0, 128, 0.3)",
            }}
            className="flex items-center gap-3 font-sans transition-transform duration-300 p-2 cursor-pointer"
          >
            <motion.div
              whileHover={{
                scale: 1.3,
                backgroundColor: "rgba(253, 230, 138, 1)",
                rotate: 360,
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
              className="p-2 rounded-full bg-purple-100 transition-all duration-300"
            >
              <item.icon className="w-5 h-5 text-orange-600" />
            </motion.div>
            <motion.span
              whileHover={{
                color: "rgba(234, 88, 12, 1)", // Orange text color on hover
              }}
              className="text-sm font-medium text-gray-800 transition-colors duration-300"
            >
              {item.text}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>


  );
};
export default SpecializationSection;