import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, RotateCcw } from 'lucide-react'

interface ServiceCardFrontProps {
    handleFlip: () => void;
    service: {
        icon: React.ReactNode;
        title: string;
        subTitle: string;
        features: string[];
    };
    hoveredStep: number | null;
    index: number;
}

const ServicesCardFront: React.FC<ServiceCardFrontProps> = ({ handleFlip, service, hoveredStep, index }) => {

    const cardVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 300
            }
        }
    };

    return (
        <div className="absolute w-full h-full backface-hidden">

            <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                className="relative group overflow-hidden transition-all duration-300 w-full h-full z-50"
                
            >

                {/* Animated Background Pattern */}
                <motion.div
                    className="absolute inset-0 opacity-30 md:opacity-20"
                    style={{
                        backgroundImage: "radial-gradient(circle at 2px 2px, yellow 1px, transparent 0)",
                        backgroundSize: "50px 50px"
                    }}
                    animate={{
                        backgroundPosition: hoveredStep === index ? ["0px 0px", "32px 32px"] : "0px 0px"
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                <div

                    className="flex flex-col items-center justify-between p-8 bg-[#15151580] rounded-2xl h-full border border-[#727272] group-hover:border-orange-500 transition-all duration-300">

                    {/* Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-24 h-24 bg-transparent border rounded-full flex items-center justify-center mb-4"
                    >
                        <div className="text-white">
                            {service.icon}
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-yellow-500 text-center text-4xl font-semibold uppercase font-mono tracking-wide">
                        {service.title} <br />
                        <span className='text-white text-3xl'>
                            {service.subTitle}
                        </span>
                    </motion.h3>

                    {/* Subtitle */}
                    {/* <h4 className="text-orange-500 text-center text-3xl font-semibold mb-4 capitalize font-mono tracking-wide">
                                            {service.subTitle}
                                        </h4> */}

                    {/* <p className="text-gray-400 font-ui text-center tracking-wider leading-relaxed mb-6">
                                    {service.description}
                                </p> */}

                    {/* Features */}
                    <div className="space-y-3 mt-4">
                        {service.features.map((feature, featureIndex) => (
                            <motion.div
                                key={featureIndex}
                                className="flex items-center gap-2 text-gray-300"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.2, duration: 0.6 }}
                            >
                                <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                                <span className={`font-sans text-sm`}>{feature}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Flip Button */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleFlip}
                        className={`font-sans relative z-100 cursor-pointer px-6 py-3 bg-transparent border text-gray-100 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 w-full flex items-center justify-center gap-2`}
                    >
                        Show More
                        <RotateCcw className="w-4 h-4" />
                    </motion.button>
                </div>

            </motion.div>

        </div>
    )
}

export default ServicesCardFront