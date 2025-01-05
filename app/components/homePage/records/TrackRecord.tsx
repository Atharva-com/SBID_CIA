"use client"

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import statsSvg from '../../../../public/stats-illustration.89e20edcbf2cccadc1f28b4a73a486ac.svg';
import Image from 'next/image';

const TrackRecord = () => {
    const cardRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        // Add hover animations to the stats cards using GSAP
        cardRefs.current.forEach((card) => {
            gsap.to(card, {
                scale: 1.1,
                duration: 0.3,
                paused: true,
                ease: 'power2.out',
            });

            card.addEventListener('mouseenter', () => {
                gsap.to(card, { scale: 1.1, backgroundColor: 'rgba(255, 140, 0, 0.15)' });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, { scale: 1, backgroundColor: 'transparent' });
            });
        });
    }, []);

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

    const itemVariants = {
        hidden: { y: 30, opacity: 0, scale: 0.8 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: 0.2
            },
        }
    };

    return (
        <section className="py-16 w-full bg-gray-50 dark:bg-gray-900">

            <div className="flex flex-col lg:flex-row items-center px-6">

                {/* Left: Illustrations */}
                <motion.div
                    className="flex-1 flex justify-center items-center space-x-6"
                    initial="hidden"
                    whileInView="visible"
                    variants={itemVariants}
                >
                    <Image
                        src={statsSvg}
                        alt="Building Illustration"
                        className="w-3/4 h-full hover:scale-110 transform transition-all duration-500"
                    />
                    {/* <img
            src="/path/to/architecture-illustration2.svg"
            alt="Design Illustration"
            className="w-1/3 hover:scale-110 transform transition-all duration-500 rounded-lg shadow-lg"
          /> */}
                </motion.div>

                {/* Right: Text and Stats */}
                <motion.div
                    className="flex-1 text-center lg:text-left mt-8 lg:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    variants={itemVariants}
                >
                    {/* Subheading */}
                    <motion.p className="text-orange-500 text-sm font-inter font-semibold uppercase tracking-wide mb-2">
                        Our Track Record
                    </motion.p>

                    {/* heading */}
                    <motion.h2 className="text-4xl font-mono font-extrabold text-gray-800 dark:text-white">
                        Shaping Skylines <br />
                        Since <span className="text-orange-500">2016</span>.
                    </motion.h2>

                    {/* Description */}
                    <motion.p className="mt-4 text-gray-600 font-inter dark:text-gray-300">
                        Over the years, we’ve created architectural wonders that redefine
                        landscapes and push the boundaries of innovation.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={textAnimation}
                        className="flex justify-center lg:justify-start gap-6 mt-8 flex-wrap">

                        {/* Stats Cards */}
                        {[
                            { stat: '150+', label: 'Clients' },
                            { stat: '200+', label: 'Projects' },
                            { stat: '50+', label: 'Awards' },
                            { stat: '25+', label: 'Years' },
                        ].map((item, index) => (

                            <motion.div
                                key={index}
                                ref={(el) => { cardRefs.current[index] = el!; }}
                                className="p-4 bg-white flex flex-col items-center justify-center gap-2 w-28 h-28 dark:bg-gray-800 cursor-pointer rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center transform transition-all duration-500 group hover:bg-gradient-to-r hover:from-orange-400 hover:to-yellow-500"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >

                                <h3 className="text-3xl font-bold text-gray-800 dark:text-white group-hover:text-white transition-colors duration-300">
                                    {item.stat}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                                    {item.label}
                                </p>

                            </motion.div>

                        ))}

                    </motion.div>

                    {/* <motion.button
            className="mt-6 px-6 py-3 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600 hover:scale-105 transform transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button> */}
                </motion.div>
            </div>
        </section>
    );
};

export default TrackRecord;

