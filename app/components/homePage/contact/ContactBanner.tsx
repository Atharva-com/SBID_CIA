"use client"

import React from 'react';
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion';
import contactBg from "../../../../public/background/ContactBg.jpg"
import { Clock, Globe, Building2, LinkedinIcon, InstagramIcon, FacebookIcon } from 'lucide-react';


const ContactBanner = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="relative py-20 md:py-20 lg:py-40 h-auto overflow-hidden w-full">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-[#1d1d1d] z-10" />

            <div className="absolute top-0 left-0 bottom-0 right-0 pointer-events-none -z-10" aria-hidden="true">
                <Image
                    src={contactBg}
                    alt="Contact Background"
                    fill
                    className="md:block hidden opacity-70"
                />
            </div>

            <motion.div
                className="relative z-20 container mx-auto px-6 py-12 md:p-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Header Section */}
                <motion.div
                    className="mb-14 text-white"
                    variants={itemVariants}
                >
                    <span className="inline-block text-sm font-semibold text-orange-500 mb-2">
                        Reach Us
                    </span>
                    <h1 className="mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl">
                        Speak with Our Friendly Team
                    </h1>
                    <p className="text-lg text-gray-300">
                        We&apos;d love to assist you. Fill out the form or drop us an email.
                    </p>
                </motion.div>

                {/* Contact Cards Grid */}
                <motion.div
                    className="grid gap-10 md:grid-cols-3"
                    variants={containerVariants}
                >
                    {/* Email Card */}
                    <motion.div
                        variants={itemVariants}
                        className="group"
                    >
                        <motion.span
                            className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-orange-500/10 text-orange-500
                                     group-hover:bg-orange-500 group-hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Mail className="h-6 w-auto" />
                        </motion.span>
                        <div className="text-white">
                            <p className="mb-2 text-lg font-semibold">Email Us</p>
                            <p className="mb-3 text-gray-300">
                                Our team is ready to assist.
                            </p>
                            {/* <motion.a
                                href="mailto:info@shreebhargava.com"
                                className="font-semibold text-orange-500 hover:text-orange-400 transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                info@shreebhargava.com
                            </motion.a> */}
                        </div>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div
                        variants={itemVariants}
                        className="group"
                    >
                        <motion.span
                            className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-orange-500/10 text-orange-500
                                     group-hover:bg-orange-500 group-hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            <MapPin className="h-6 w-auto" />
                        </motion.span>
                        <div className="text-white">
                            <p className="mb-2 text-lg font-semibold">Visit Us</p>
                            <p className="mb-3 text-gray-300">
                                Drop by our office for a chat.
                            </p>
                            {/* <motion.a
                                href="#"
                                className="font-semibold text-orange-500 hover:text-orange-400 transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                Floor 12, Bhargava Tower, Mumbai
                            </motion.a> */}
                        </div>
                    </motion.div>

                    {/* Phone Card */}
                    <motion.div
                        variants={itemVariants}
                        className="group"
                    >
                        <motion.span
                            className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-orange-500/10 text-orange-500
                                     group-hover:bg-orange-500 group-hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Phone className="h-6 w-auto" />
                        </motion.span>
                        <div className="text-white">
                            <p className="mb-2 text-lg font-semibold">Call Us</p>
                            <p className="mb-3 text-gray-300">
                                We&apos;re available Mon-Fri, 9am-6pm.
                            </p>
                            {/* <motion.a
                                href="tel:+919876543210"
                                className="font-semibold text-orange-500 hover:text-orange-400 transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                +91 987 654 3210
                            </motion.a> */}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 my-12 text-white w-full md:w-auto"
                >
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                        {/* Primary Contact */}
                        <div className="space-y-4">
                            <motion.a
                                href="tel:+919876543210"
                                className="flex items-center gap-4 hover:text-orange-400 transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                <Phone className= "w-6 h-6 text-orange-500" />
                                <div>
                                    <span className="block">+91 987 654 3210</span>
                                    <span className="text-sm text-gray-300">Primary</span>
                                </div>
                            </motion.a>

                            <motion.a
                                href="tel:+919876543211"
                                className="flex items-center gap-4 hover:text-orange-400 transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                <Phone className= "w-6 h-6 text-orange-500" />
                                <div>
                                    <span className="block">+91 987 654 3211</span>
                                    <span className="text-sm text-gray-300">Support</span>
                                </div>
                            </motion.a>
                        </div>

                        {/* Email & Website */}
                        <div className="space-y-4">
                            <motion.a
                                href="mailto:info@shreebhargava.com"
                                className="flex items-center gap-4 hover:text-orange-400 transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                <Mail className= "w-6 h-6 text-orange-500" />
                                <div>
                                    <span className="block">info@shreebhargava.com</span>
                                    <span className="text-sm text-gray-300">General Inquiries</span>
                                </div>
                            </motion.a>

                            <motion.a
                                href="https://www.shreebhargava.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 hover:text-orange-400 transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                <Globe className= "w-6 h-6 text-orange-500" />
                                <span>www.shreebhargava.com</span>
                            </motion.a>
                        </div>

                        {/* Location & Office Hours */}
                        <div className="space-y-4">
                            <motion.div
                                className="flex items-center gap-4"
                                whileHover={{ x: 5 }}
                            >
                                <Building2 className= "w-6 h-6 text-orange-500" />
                                <div>
                                    <span className="block">Corporate Office</span>
                                    <span className="text-sm text-gray-300">Floor 12, Bhargava Tower</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-4"
                                whileHover={{ x: 5 }}
                            >
                                <MapPin className= "w-6 h-6 text-orange-500" />
                                <div>
                                    <span className="block">Mumbai, Maharashtra</span>
                                    <span className="text-sm text-gray-300">400001, India</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-4"
                                whileHover={{ x: 5 }}
                            >
                                <Clock className= "w-6 h-6 text-orange-500" />
                                <div>
                                    <span className="block">Mon - Sat: 9:00 AM - 6:00 PM</span>
                                    <span className="text-sm text-gray-300">Sunday Closed</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-2">
                            <motion.a
                                href="#linkedin"
                                whileHover={{ y: -3 }}
                                className="hover:text-orange-400 transition-colors"
                            >
                                <LinkedinIcon className= "w-6 h-6 text-orange-500" />
                            </motion.a>
                            <motion.a
                                href="#instagram"
                                whileHover={{ y: -3 }}
                                className="hover:text-orange-400 transition-colors"
                            >
                                <InstagramIcon className= "w-6 h-6 text-orange-500" />
                            </motion.a>
                            <motion.a
                                href="#facebook"
                                whileHover={{ y: -3 }}
                                className="hover:text-orange-400 transition-colors"
                            >
                                <FacebookIcon className= "w-6 h-6 text-orange-500" />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactBanner;