import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { ArrowRight } from 'lucide-react';

const socialLinks = [
  { url: "https://www.facebook.com", icon: FaFacebookF, delay: 0.2 },
  { url: "https://www.instagram.com", icon: FaInstagram, delay: 0.4 },
  { url: "https://www.linkedin.com", icon: FaLinkedinIn, delay: 0.6 },
  { url: "https://www.twitter.com", icon: FaTwitter, delay: 0.8 },
];

const HeroContent = () => {


  const router = useRouter();

  const handleServiceClick = () => {
    router.push("/services");
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 40, Scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    }
  };

  return (
    <>
      {/* Left column - Enhanced text content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={textAnimation}
        className="relative container"
      >

        <div className="relative flex flex-col justify-center items-center md:items-start flex-nowrap mx-auto gap-6 max-w-xl">

          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textAnimation}
            transition={{ delay: 0.4 }}
          >
            <motion.h1
              variants={textAnimation}
              className="text-transparent md:font-bold font-outfit text-5xl md:text-6xl tracking-wide text-center md:text-start"
            >
              <motion.span
                className='pl-2 text-gradient-yellow'
                style={{ lineHeight: '1.2' }}
              >
                Shree Bhargava
                <br />
                Architecture Studio
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textAnimation}
            transition={{ delay: 0.8 }}
            className='text-lg md:text-xl font-sans mx-auto font-medium text-gray-700 text-center md:text-start'
          >
            From concept to creation, we specialize in innovative architectural designs that transform spaces into timeless masterpieces. Let us shape your vision into reality with our expertise in interior, exterior, and sustainable building solutions.
            <br />

          </motion.div>

          {/* CTA and Social Media */}
          <div className="w-full space-y-8">
            {/* CTA Button */}
            <motion.div 
            className="flex gap-6 justify-center md:justify-start"
            >
              <motion.button
                onClick={handleServiceClick}
                initial="hidden"
            whileInView="visible"
            variants={textAnimation}
            transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: "0px 0px 15px rgba(209, 213, 219, 0.7)",
                }}
                className="relative overflow-hidden bg-orange-500 px-8 md:px-12 md:py-4 py-3 text-sm md:text-base font-medium text-gray-100 rounded-full shadow-lg transition-all duration-300"
              >
                <span className="relative flex items-center justify-center gap-2 font-sans">
                  Consult Now
                  <motion.span
                    initial={{ x: -10 }}
                    whileInView={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 1.5,
                    }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </span>
                <span className="absolute inset-0 bg-yellow-500 opacity-20 rounded-full transform scale-0 group-hover:scale-150 transition-all duration-700 ease-out"></span>
              </motion.button>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textAnimation}
              className="flex justify-center md:justify-start gap-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: social.delay }}
                  className="text-gray-600 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      boxShadow: "0px 5px 15px rgba(255, 165, 0, 0.5)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      y: [0, -2, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                      },
                    }}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-500"
                  >
                    <social.icon className="w-6 h-6 text-gray-700 hover:text-white" />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>

          </div>

        </div>
        
      </motion.div>

    </>
  )
}

export default HeroContent


