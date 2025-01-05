"use client"

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Image from "next/image";
import textBg from "../../../public/background/servicesBg.png";
import { ChevronDown } from "lucide-react";

const CompanyName = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        // Split the text into individual letters
        if (headingRef.current) {
            const text = new SplitType(headingRef.current, { types: "chars" });


            const ctx = gsap.context(() => {
                // Animate each character
                gsap.fromTo(
                    text.chars,
                    {
                        opacity: 0,
                        y: 50,
                        rotateX: 90,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        stagger: 0.05,
                        duration: 1,
                        ease: "power3.out",
                    }
                );
            });


            return () => {
                ctx.revert();
            };
        }
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    return (

        <div className="relative overflow-hidden w-full"

        >

            <div className="absolute top-0 left-0 inset-0"
                area-hidden="true"
            >
                <Image
                    src={textBg}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority={true}
                    className="opacity-50"

                />
            </div>

            <motion.div
                className="container mx-auto px-6 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex h-screen flex-col justify-center items-center"
                >

                    {/* Company Name */}
                    <motion.h1
                        ref={headingRef}
                        className="text-4xl md:text-5xl font-semibold mb-6 text-gray-100 tracking-wider font-outfit text-center"
                        style={{
                            textShadow: "0px 0px 6px rgb(107, 114, 128)",
                            lineHeight: "1.2"
                        }}
                    >
                        Shree Bhargava Infrastructure Development.
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2 }}
                        className="text-2xl md:text-3xl text-gray-200 mb-8 font-mono flex items-center justify-center">
                        Creative Indian Architects

                        <sup className="text-base md:text-lg text-gray-200 ml-1 font-semibold">
                            ™
                        </sup>
                    </motion.p>

                    <motion.p
                        className="text-xl mt-8 text-gray-300 font-mono"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 2.5 }}
                    >
                        We're glad to have you here! Explore the world of architecture with us.
                    </motion.p>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col "
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <span className="font-mono text-gray-300 relative right-8">Scroll Down</span>
                        <ChevronDown className="w-8 h-8 text-gray-300" />
                    </motion.div>

                </motion.div>


            </motion.div>

        </div>
    );
};

export default CompanyName;
