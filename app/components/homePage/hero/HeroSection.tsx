"use client"

import React from 'react';
import { motion } from 'framer-motion';
import HeroBg from './HeroBg';
import HeroContent from './HeroContent';
import SpecializationSection from './SpecializationSection';


const Hero = () => {



    return (
        <motion.div
            className="relative min-h-screen w-full overflow-hidden px-6 py-20 md:py-20 lg:py-40"
        >

            {/* Hero Background */}
            <HeroBg />

            {/* Specialization Section */}
            <SpecializationSection />

            {/* Main content */}
            <div className="relative lg:container lg:mx-auto px-6 md:px-8 md:py-28 xl:py-20 flex items-center justify-start h-screen mt-0 md:mt-0">


                <div className="flex justify-center items-center">

                    {/* Hero content */}
                    <HeroContent />

                </div>

            </div>

        </motion.div>


    );
};

export default Hero;