"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";

const images = Array.from({ length: 20 }, (_, i) => `https://picsum.photos/1600/900?random=${i + 1}`);

// Transition groups with advanced animations
const transitionVariants = [
    {
        // Paper Scroll Effect
        initial: { y: "-100%", opacity: 0 },
        animate: { y: "0%", opacity: 1 },
        exit: { y: "100%", opacity: 0 },
    },
    {
        // Crushing Effect
        initial: { scaleY: 0.1, opacity: 0 },
        animate: { scaleY: 1, opacity: 1 },
        exit: { scaleY: 0.1, opacity: 0 },
    },
    {
        // Door Opening Effect
        initial: { clipPath: "inset(0 50% 0 50%)", opacity: 0 },
        animate: { clipPath: "inset(0 0% 0 0%)", opacity: 1 },
        exit: { clipPath: "inset(0 50% 0 50%)", opacity: 0 },
    },
    {
        // Circle Reveal Effect
        initial: { clipPath: "circle(0% at 50% 50%)", opacity: 0 },
        animate: { clipPath: "circle(100% at 50% 50%)", opacity: 1 },
        exit: { clipPath: "circle(0% at 50% 50%)", opacity: 0 },
    },
    {
        // Perspective Rotate Y Effect
        initial: { rotateY: -90, opacity: 0, perspective: 1000 },
        animate: { rotateY: 0, opacity: 1 },
        exit: { rotateY: 90, opacity: 0 },
    },
    {
        // Rotate Z Effect
        initial: { scale: 1.5, opacity: 0, rotateZ: 45 },
        animate: { scale: 1, opacity: 1, rotateZ: 0 },
        exit: { scale: 0.5, opacity: 0, rotateZ: -45 },
    },
    {
        // Slide in/out X Effect
        initial: { x: "-100%", opacity: 0 },
        animate: { x: "0%", opacity: 1 },
        exit: { x: "100%", opacity: 0 },
    },
];

const FullscreenCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousProgress, setPreviousProgress] = useState<number>(0);
    const totalSlides = images.length;
    const radius = 212.8;
    const circumference = 2 * Math.PI * radius;
    const progressFraction = (currentIndex + 1) / (totalSlides);
    const lineControls = useAnimation();
    const textControls = useAnimation();

    useEffect(() => {
        lineControls.start({ width: "15rem", scaleX: 1, transition: { duration: 2, delay: 2 } });

        textControls.start({ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 4 } });
    }, [lineControls, textControls]);

    useEffect(() => {
        setPreviousProgress(progressFraction);
    }, [progressFraction]);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const getTransitionGroup = () => {
        // Cycle through transition effects
        const groupIndex = currentIndex % transitionVariants.length;
        return transitionVariants[groupIndex];
    };

    const transition = getTransitionGroup();

    return (
        <div className="relative w-full h-screen overflow-hidden z-[10]">
            {/* Slides */}
            <AnimatePresence>
                <motion.div
                    key={currentIndex}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={transition.initial}
                    animate={transition.animate}
                    exit={transition.exit}
                    transition={{ duration: 1.5 }}
                >

                    {/* Image with radial fade */}
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            maskImage:
                                "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0.2) 100%)",
                            WebkitMaskImage:
                                "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0.2) 100%)",
                        }}
                    >
                        {/* Image */}
                        <Image
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0 opacity-90"
                        />

                    </motion.div>

                    {/* Doughnut Effect */}

                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute z-10 md:block hidden"
                        style={{
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                        }}

                        viewBox="0 0 1358 608"
                    >
                        {/* Base circle */}
                        <motion.circle
                            cx="679"
                            cy="304"
                            r={radius}
                            initial={{ strokeDashoffset: 0 }}
                            animate={{ strokeDashoffset: circumference, }}
                            transition={{ duration: 1.5, }}
                            stroke="rgba(255, 255, 255, 0.2)"
                            fill="rgba(0,0,0,0)"
                            strokeWidth="2px"
                        ></motion.circle>

                        {/* Progress Circle */}
                        <motion.circle
                            cx="679"
                            cy="304"
                            r={radius}
                            stroke="#fff"
                            fill="rgba(0,0,0,0)"
                            strokeWidth="2px"
                            style={{
                                strokeDasharray: circumference,
                                // strokeDashoffset: circumference * (1 - previousProgress),
                                transform: "rotate(-90deg)",
                                transformOrigin: "50% 50%",
                            }}
                            animate={{
                                strokeDashoffset: circumference * (1 - progressFraction),
                            }}
                            initial={{
                                strokeDashoffset: circumference * (1 - previousProgress),
                            }}
                            transition={{
                                duration: 1.5,
                                delay: 2,
                            }}
                        ></motion.circle>

                    </motion.svg>

                    {/* Center Text */}
                    <motion.h1
                        className="absolute text-white text-3xl tracking-wide z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 3 }}
                    >
                        Slide {currentIndex + 1}
                    </motion.h1>

                </motion.div>

            </AnimatePresence>



            {/* Slide Numbers */}
            <div className="absolute bottom-[40%] md:bottom-5 right-[43%] md:right-10 font-mono text-[#fff9] text-lg lg:text-sm">
                <p>
                    {currentIndex + 1} — {totalSlides}
                </p>
            </div>

            {/* Slide Numbers */}
            <div className="absolute bottom-[40%] md:bottom-5 right-[43%] md:right-10 font-mono text-[#fff9] text-lg lg:text-sm">
                <p>
                    {currentIndex + 1} — {totalSlides}
                </p>
            </div>

            {/* Navigation */}

            <motion.div className="flex items-center justify-between absolute bottom-4 md:top-1/2 right-0 left-0 -translate-y-1/2 mx-auto w-[90vw]">

                <div className="relative cursor-pointer py-5 font-mono text-[#fff9] w-20">

                    <motion.div
                        className="absolute h-[1px] bottom-2 md:top-1/2 left-full bg-[#fff] -mt-1 opacity-25 pointer-events-none w-60"
                        style={{ width: "0", transformOrigin: "15rem" }}
                        initial={{ scaleX: 0 }}
                        animate={lineControls}
                    >
                    </motion.div>

                    <motion.div
                        onClick={prevSlide} className="text-lg tracking-wider uppercase"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={textControls}
                    >

                        Prev

                        <div className="absolute w-20 h-20 top-1/2 left-1/2 -mt-10 -ml-10 rounded-full backface-hidden"></div>

                    </motion.div>

                </div>

                <div className="relative cursor-pointer py-5 font-mono text-[#fff9] text-right w-20">

                    <motion.div
                        className="absolute h-[1px] bottom-2 md:top-1/2 right-full bg-[#fff] -mt-1 opacity-25 pointer-events-none"
                        style={{ width: "0", transformOrigin: "-15rem" }}
                        initial={{ scaleX: 0 }}
                        animate={lineControls}
                    ></motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={textControls}
                        onClick={prevSlide} className="text-lg tracking-wider uppercase"
                    >

                        Next

                        <div className="absolute w-20 h-20 top-1/2 left-1/2 -mt-10 -ml-10 rounded-full backface-hidden"></div>

                    </motion.div>
                </div>

            </motion.div>
            
        </div>
    );
};

export default FullscreenCarousel;
