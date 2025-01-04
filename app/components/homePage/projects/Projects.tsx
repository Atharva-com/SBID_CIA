"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Plus, Eye } from 'lucide-react';
import HeroGridPattern from '../hero/HeroGridPattern';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ProjectCard from './ProjectCard';
import { projects } from './ProjectArray';
import ProjectPreview from './ProjectPreview';
import ProjectShowcase from './ProjectShowcase';

const ProjectsSection = () => {
    const [hoveredId, setHoveredId] = useState(null);
    const [selectedProject, setSelectedProject] = useState<null | {
        id: string;
        title: string;
        category: string;
        description: string;
        images: string[];
        year: string;
        location: string;
        status: string;
        size: string;
    }>(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const textRef = useRef(null);
    const router = useRouter();

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // GSAP ScrollTrigger animation
        gsap.fromTo(
            textRef.current,
            { y: 0 },
            {
                y: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top center",
                    end: "+=40%",
                    scrub: true,
                    toggleActions: "play none none reverse",
                    pin: true,
                },
            }
        );

    }, []);

    const handleClose = () => {
        setSelectedProject(null);
    };

    const handleExploreClick = () => {
        router.push("/services");
    };


    const handleProjectClick = (project: {
        id: string;
        title: string;
        category: string;
        description: string;
        images: string[];
        year: string;
        location: string;
        status: string;
        size: string;
    }) => {
        setSelectedProject(project);
    };


    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'residential', label: 'Residential' },
        { id: 'commercial', label: 'Commercial' },
        { id: 'cultural', label: 'Cultural' },
        { id: 'mixed', label: 'Mixed Use' }
    ];

    const filterVariants = {
        selected: {
            backgroundColor: "#eab308",
            color: "#1f2937",
            scale: 1.1,
        },
        notSelected: {
            backgroundColor: "#1f2937",
            color: "#fbbf24",
            scale: 1,
        },
    };

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <section className="relative py-20 md:py-20 lg:py-40 h-auto w-full overflow-hidden">

            {/* Background pattern */}
            <HeroGridPattern />

            <motion.h1
                // variants={textAnimation}
                ref={textRef}
                className="absolute md:block hidden top-40 left-[-0.15em] text-[12vw] font-extrabold leading-[0.72] text-white opacity-10 pointer-events-none z-0 uppercase"
                style={{
                    fontFamily: "korolev-condensed, sans-serif",
                    transform: "translate3d(0px, 27px, 0px)",
                }}
            >
                Projects
            </motion.h1>

            <motion.h1
                // variants={textAnimation}
                // ref={textRef}
                className="absolute block md:hidden top-64 left-[-0.15em] text-[20vw] font-extrabold leading-[0.72] text-white opacity-10 pointer-events-none z-0
                 uppercase"
                style={{
                    fontFamily: "korolev-condensed, sans-serif",
                    transform: "translate3d(0px, 27px, 0px)",
                }}
            >
                Projects
            </motion.h1>

            {/* Main content */}
            <div className="w-full relative flex flex-col items-center justify-center gap-20 z-1">

                {/* Section Header */}

                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ margin: "-100px" }}
                    className="relative z-1 px-8 w-full flex flex-col lg:items-end lg:text-end items-center justify-center text-center"
                >

                    <motion.span
                        className={`font-sans text-gray-400 text-lg tracking-wider`}
                        whileHover={{ scale: 1.05 }}
                    >
                        Architectural Projects
                    </motion.span>

                    <h2 className={`font-outfit text-4xl md:text-6xl md:max-w-2xl font-bold tracking-wide text-gray-100`}>
                        Architectural Marvels Brought to Life
                        <motion.span
                            className="text-yellow-400 inline-block pl-2"
                            animate={{
                                rotate: [0, 5, 0],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatDelay: 5
                            }}
                        >
                            .
                        </motion.span>
                    </h2>

                </motion.div>

                {/* Category Filter */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            variants={filterVariants}
                            animate={selectedCategory === category.id ? "selected" : "notSelected"}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`font-sans px-6 py-2 rounded-full text-sm text-orange-500 cursor-pointer transition-all duration-300`}
                        >
                            {category.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Masonry Grid */}
                {/* <ProjectShowcase projects={filteredProjects} onProjectClick={handleProjectClick} /> */}
                <AnimatePresence>
                    <motion.div

                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-2 md:px-0 md:w-[115%] my-8 md:my-20"
                    >

                        {filteredProjects.map((project) => (
                            <ProjectCard

                                key={project.id}
                                project={project}
                                onClick={() => handleProjectClick(project)}
                            />
                        ))}

                    </motion.div>
                </AnimatePresence>

                {/* View All Button */}
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
                        View More Projects
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

            {/* full preview */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        {/* Full Screen Preview */}
                        <ProjectPreview
                            project={selectedProject}
                            isOpen={!!selectedProject}
                            onClose={handleClose}
                        />
                    </>
                )}
            </AnimatePresence>

        </section>
    );
};

export default ProjectsSection;