import React from 'react'
import HeroGridPattern from './HeroGridPattern'
import Image from 'next/image'
import heroBackground from '../../../../public/hero/heroBg.jpg'

const HeroBg = () => {
    const textAnimation = {
        hidden: { opacity: 0, y: 40, Scale: 0.8 },
        visible: {
            opacity: 1,
            y: [-40, 10, 0],
            scale: 1,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 400,
                damping: 15,
            },
        }
    };
    return (
        <>

            {/* hero background image */}
            <div className='absolute top-0 left-0 bottom-0 right-0 pointer-events-none opacity-80' area-hidden="true">
                <Image
                    src={heroBackground}
                    alt="About Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition='left center'
                    quality={100}
                    className='bg-opacity-80'
                />

            </div>



            {/* hero grid background pattern */}
            <HeroGridPattern />
        </>
    )
}

export default HeroBg