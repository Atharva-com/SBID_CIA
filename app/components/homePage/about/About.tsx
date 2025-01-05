"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socialLinks = [
    { url: "https://www.facebook.com", icon: FaFacebookF, delay: 0.2 },
    { url: "https://www.instagram.com", icon: FaInstagram, delay: 0.4 },
    { url: "https://www.linkedin.com", icon: FaLinkedinIn, delay: 0.6 },
    { url: "https://www.twitter.com", icon: FaTwitter, delay: 0.8 },
];

const AboutPage = () => {

    const containerVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { staggerChildren: 0.3, duration: 0.8, delay: 0.2 },
        },
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
        <motion.div
            initial="initial"
            animate="visible"
            variants={containerVariants}
            className="bg-white relative h-auto overflow-hidden w-full md:rounded-tr-[200px] md:rounded-bl-[200px]">

            <div className="relative z-10 container mx-auto px-4 py-12 md:p-16 ">
                {/* Our Story Section */}
                <motion.div
                    initial="initial"
                    animate="visible"
                    variants={containerVariants}
                    className="mb-24"
                >

                    {/* heading */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                    >
                        {/* Wrapper for the leader section */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={itemVariants}
                            transition={{ delay: 0.2 }}
                            className=""
                        >
                            <motion.span
                                initial="hidden"
                                animate="visible"
                                variants={itemVariants}
                                className={`font-sans text-orange-500 text-lg tracking-wider uppercase`}
                                whileHover={{ scale: 1.05 }}
                            >
                                About us
                            </motion.span>

                            <motion.h2
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl font-bold font-outfit text-[#1f2937]"
                                variants={itemVariants}
                            >
                                Who We Are ?
                            </motion.h2>
                        </motion.div>

                    </motion.div>

                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                        {/* Text Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={itemVariants}
                            transition={{ delay: 0.4 }}
                            className="space-y-6   tracking-wide">
                            <motion.p
                                initial="hidden"
                                animate="visible"
                                variants={itemVariants}
                                transition={{ delay: 0.4 }}
                                className="text-gray-700 leading-relaxed">
                                At Shree Bhargava Infrastructure Development, we've cultivated a legacy of architectural excellence since our inception. Our journey began with a vision to merge traditional Indian architectural principles with modern innovation, creating spaces that resonate with both cultural richness and contemporary functionality.
                            </motion.p>

                            <motion.p
                                initial="hidden"
                                animate="visible"
                                variants={itemVariants}
                                transition={{ delay: 0.6 }}
                                className="text-gray-700 leading-relaxed">
                                Each project we undertake is a testament to our commitment to sustainable design, client satisfaction, and architectural innovation. We believe in creating spaces that not only meet functional requirements but also inspire and enhance the lives of those who inhabit them.
                            </motion.p>

                            {/* Founder Quote */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={itemVariants}
                                transition={{ delay: 0.8 }}
                                className="mt-6 p-6 rounded-lg shadow-xl">
                                <motion.p className="text-gray-800"
                                    style={{
                                        fontFamily: 'cursive'
                                    }}
                                >
                                    “Architecture is not just about buildings; it&apos;s about creating experiences that resonate with people&apos;s lives, aspirations, and dreams. Every project we undertake is an opportunity to leave a lasting legacy in the built environment.”
                                </motion.p>

                                {/* More Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-4 px-6 py-3 text-sm font-normal text-white bg-orange-500 rounded-full shadow transition-all duration-300 font-inter cursor-pointer flex items-center"
                                >
                                    Read Our Journey
                                    <motion.span
                                        initial={{ x: -10 }}
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 1.5,
                                        }}
                                        className='pl-2'
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.span>
                                </motion.button>

                            </motion.div>

                        </motion.div>

                        {/* Image Grid */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={itemVariants}
                            className="grid grid-cols-2 gap-4 relative">
                            <motion.img

                                whileHover={{ scale: 1.05 }}
                                src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWJvdXR8ZW58MHx8MHx8fDA%3D"
                                alt="Office Space 1"
                                className="w-full h-48 object-cover rounded-lg shadow-md"
                            />
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src="https://plus.unsplash.com/premium_photo-1711132340351-6c3be16d08d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fEFib3V0JTIwYXJjaGl0ZWN0dXJlJTIwb2ZmaWNlfGVufDB8fDB8fHww"
                                alt="Office Space 2"
                                className="w-full h-48 object-cover rounded-lg shadow-md"
                            />
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fEFib3V0JTIwYXJjaGl0ZWN0dXJlJTIwb2ZmaWNlfGVufDB8fDB8fHww"
                                alt="Office Space 3"
                                className="w-full h-48 object-cover rounded-lg shadow-md"
                            />
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fEFib3V0JTIwYXJjaGl0ZWN0dXJlJTIwb2ZmaWNlfGVufDB8fDB8fHww"
                                alt="Office Space 4"
                                className="w-full h-48 object-cover rounded-lg shadow-md"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* About Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex md:flex-row flex-col gap-8 md:gap-0 justify-between items-center border-t pt-8"
                >
                    <h3
                        style={{
                            fontFamily: 'cursive'
                        }}
                        className="text-3xl font-bold flex flex-col italic font-outfit text-[#1f2937]">
                        Shree Bharagva Infrastructure Development
                        <span className="text-orange-500 text-2xl  ">
                            Creative Indian Architects
                        </span>
                    </h3>

                    {/* Social Media Icons */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={textAnimation}
                        className="flex justify-center items-center gap-6"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
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
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-orange-500"
                                >
                                    <social.icon className="w-6 h-6 text-gray-700 hover:text-white" />
                                </motion.div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Read More Button */}

                    <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center text-gray-800 hover:text-orange-500 cursor-pointer"
                    >
                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AboutPage;