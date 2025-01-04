"use client"

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
} from 'lucide-react';
import { DM_Sans } from 'next/font/google';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import serviceBg from '../../../../public/background/servicesBg.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesCard from './ServicesCard';
import { services } from './ServicesContent';

const dmSans = DM_Sans({ subsets: ['latin'] });


const ServicesSection = () => {

  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const router = useRouter();

  const handleExploreClick = () => {
    router.push("/services");
  };

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // GSAP ScrollTrigger animation
    gsap.fromTo(
      textRef.current,
      { y: 0 },
      {
        y: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top center",
          scrub: true,
          toggleActions: "play none none reverse",
          pin: true,
        },
      }
    );

    // Cards stagger animation
    const cards = document.querySelectorAll('.service-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "center center",
          scrub: 1
        }
      }
    );
  }, []);



  return (
    <div ref={sectionRef} className="relative py-20 md:py-20 lg:py-40 lg:mx-auto h-auto w-full">

      {/* serives Background */}
      <div className='absolute top-0 left-0 bottom-0 right-0 pointer-events-none -z-0 h-full' area-hidden="true">

        <Image
          src={serviceBg}
          alt="Services Background"
          quality={100}
          className='h-full w-full object-cover'
        />

      </div>

      <motion.h1
        // variants={textAnimation}
        ref={textRef}
        className="absolute md:block hidden top-40 left-[-0.15em] text-[12vw] font-extrabold leading-[0.72] text-white opacity-10 pointer-events-none z-0 uppercase"
        style={{
          fontFamily: "korolev-condensed, sans-serif",
          transform: "translate3d(0px, 27px, 0px)",
        }}
      >
        Services
      </motion.h1>

      <motion.h1
        // variants={textAnimation}
        className="absolute block md:hidden top-72 left-[-0.15em] text-[18vw] font-extrabold leading-[0.72] text-white opacity-10 pointer-events-none z-0 uppercase"
        style={{
          fontFamily: "korolev-condensed, sans-serif",
          transform: "translate3d(0px, 27px, 0px)",
        }}
      >
        Services
      </motion.h1>

      {/* Main Content */}
      <div className="container mx-auto flex gap-24 flex-col">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ margin: "-100px" }}
          className="relative z-1 flex flex-col lg:items-end lg:text-end items-center justify-center text-center"
        >

          <motion.span
            className={`${dmSans.className} text-gray-400 text-lg tracking-wider`}
            whileHover={{ scale: 1.05 }}
          >
            OUR EXPERTISE
          </motion.span>

          <h2 className={`font-outfit text-4xl md:text-6xl md:max-w-2xl font-bold tracking-wide text-gray-100`}>
            {/* Plan Your Dream Space With Our Services */}
            Bringing the best to you by the best Architects
          </h2>

        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-12">
          {services.map((service, index) => {
            return (
              <ServicesCard key={index} service={service} index={index} />
            )
          }
          )}
        </div>

        {/* Explore serice */}
        <div className="text-center ">
          <motion.button
            onClick={handleExploreClick}
            whileHover={{
              scale: 1.05,

            }}
            style={{
              background: "linear-gradient(90deg, #FFD700, #FFC107, #FFB300)",
              boxShadow: "0px 0px 15px rgba(255, 213, 0, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden px-8 md:px-16 md:py-4 py-3 text-sm md:text-base font-medium bg-yellow-400 text-gray-900 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 font-sans">
              Discuss Your Project
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

            {/* Ripple Effect */}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-yellow-500 opacity-20 rounded-full transform scale-0 group-hover:scale-150 transition-all duration-700 ease-out"
            ></span>
          </motion.button>
        </div>

      </div>

    </div>
  );
};


export default ServicesSection