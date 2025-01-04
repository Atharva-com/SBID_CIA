import React, { useEffect, useRef, useState, JSX } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from './ServicesContent';
import ServiceCardBack from './ServicesCardBack';
import ServicesCardFront from './ServicesCardFront';


gsap.registerPlugin(ScrollTrigger);

interface Service {
    icon: JSX.Element;
    title: string;
    subTitle: string;
    description: string;
    features: string[];
    benefits: { icon: JSX.Element; text: string }[];
    processSteps: string[];
}

const ServicesCard = ({ service, index }: { service: Service; index: number }) => {
    const sectionRef = useRef(null);
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState('process');
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
        // Reset tab when card is flipped back
        if (isFlipped) {
            setTimeout(() => setActiveTab('process'), 300);
        }
    };

    useEffect(() => {

        // Cards stagger animation
        const cards = document.querySelectorAll('.service-card');
        gsap.fromTo(cards,
            { opacity: 0, y: 60 },
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

        <motion.div 
        animate={{
            y: [0, -2, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
            },
        }}
        key={index} className='service-card relative h-[500px] w-full perspective-1000 '>

            <motion.div
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
                className='w-full h-full relative preserve-3d transition-transform duration-700'
            >

                {/* Front */}
                <ServicesCardFront handleFlip={handleFlip} service={service} hoveredStep={hoveredStep} index={index} />

                {/* Back */}
                <ServiceCardBack isFlipped={isFlipped} hoveredStep={hoveredStep} setHoveredStep={setHoveredStep} index={index} service={service} handleFlip={handleFlip} activeTab={activeTab} setActiveTab={setActiveTab} />

            </motion.div>
        </motion.div>
        
    )
}





export default ServicesCard;