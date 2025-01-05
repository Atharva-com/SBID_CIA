import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Eye, Plus } from 'lucide-react';

interface ProjectCardProps {
    project: {
        id: string;
        title: string;
        category: string;
        description: string;
        images: string[];
        year: string;
        location: string;
        status: string;
        size: string;
    };
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    return (
        <>

            <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.6, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
                transition={{ duration: 0.8 }}

                className={`relative group rounded-lg overflow-hidden shadow-sm cursor-pointer w-[100%] h-full md:h-[350px]`}
            >
                <motion.div 
                animate={{
                    y: [0, -2, 0],
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                    },
                }}
                className='relative w-full h-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:border-orange-500 hover:border-2'>

                    <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full overflow-hidden">


                        <img
                            // width={1000}
                            // height={1000}
                            src={project.images[0]}
                            alt={project.title}
                            className="w-[100%] h-[350px] bg-no-repeat transform transition-transform duration-700"
                        />

                        {/* Overlay */}
                        <motion.div
                            className="absolute inset-0 hover:bg-gradient-to-b hover:from-transparent hover:to-black/90 h-full md:h-[350px]"
                        >
                            <motion.div
                                // initial={{ y: 30, opacity: 0 }}
                                // whileHover={{ y: 0, opacity: 1, rotate: -2 }}
                                // transition={{ duration: 0.6, delay: 0.2 }}
                                className={`relative z-10 h-full w-full p-12 flex flex-col gap-2 translate-y-60 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:-rotate-2 transition-transform duration-700 delay-200 ${parseInt(project.id) % 3 === 1 ? "md:items-end md:text-end" : parseInt(project.id) % 3 === 0 ?  "md:items-start md:text-start" : "md:items-start" } text-start items-start  justify-end`}
                            >
                                <motion.span 
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                whileHover={{ scale: 1.05}}
                                transition={{ duration: 0.4 }}
                                className="inline-block px-4 py-1 bg-orange-500 text-white font-outfit tracking-wide rounded-full text-sm">
                                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                                </motion.span>

                                <motion.h3
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-2xl font-mono tracking-wider font-normal text-gray-100 mb-4 max-w-xs">
                                    {project.title}
                                </motion.h3>

                                {/* Action Buttons */}
                                <div className="flex gap-4">

                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex items-center bg-white font-outfit text-gray-900 px-4 py-1 rounded-full text-sm font-medium"
                                    >
                                        <Eye className="w-3 h-3 mr-2" />
                                        View Details
                                    </motion.button>

                                    <motion.button
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ duration: 0.4 }}
                                        className="bg-yellow-400 p-2 rounded-full"
                                        onClick={onClick}
                                    >
                                        <Plus className="w-4 h-4 text-gray-900" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                </motion.div>
            </motion.div>

        </>
    )
}

export default ProjectCard