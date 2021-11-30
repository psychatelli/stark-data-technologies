import React, { useEffect} from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

import './services.scss'

 const Services = () => {


    const controls = useAnimation();
    // const [capabilitiesWrapper, inView] = useInView({threshold: .1})
    const [capabilitiesHeader, inView] = useInView({threshold: 1})

    useEffect(() => {
        if (inView) {controls.start("visible") }
        // if(capabilityHead){controls.start("visible") }
     }, [controls, inView]);


    const descriptionBlockContent = [
        {
            img: '/tech-icons/cyber-security.png',
            title: 'cyber-security',
            description: 'This si the desilckcnf dthat is aam going to showcase inthe description section.'
        },
        {
            img: '/tech-icons/infrastructure-design.png',
            title: 'infrastructure-design',
            description: 'This si the desilckcnf dthat is aam going to showcase inthe description section.'
        },
        {
            img: '/tech-icons/cloud-computing.png',
            title: 'Cloud Computing',
            description: 'This si the desilckcnf dthat is aam going to showcase inthe description section.'
        },
        {
            img: '/tech-icons/data-dashboards.png',
            title: 'Data Dashboards',
            description: 'This si the desilckcnf dthat is aam going to showcase inthe description section.'
        },
    ]


     
    return (
        <div className='services-wrapper'>
        
        <div ref={capabilitiesHeader}> 
        <motion.div 
        className='header-section' 
        
        animate={controls}
        initial="hidden"
        transition={{ duration: 1}}
        variants={{
        visible: { x: 0  },
        hidden: { x: -700 }
        }}
        >
                <h3>Bringing You The Next Generation Of Tech</h3>
        <p>This si the desilckcnf dthat This si the desilckcnf dthat is aam going to showcase inthe description is aam going to showcase inthe description</p>      
        </motion.div>
        </div>
        

        <div className='service-items-wrapper'>
            {
                descriptionBlockContent.map((item, index) => <motion.div 
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 3.3, delay: index * .2, ease: [0.68, -0.55, 0.265, 1.25]}}
                    variants={{
                    visible: { y: 0  },
                    hidden: { y: 900 }
                    }}
                    key={item.title} 
                    className='service-item-wrapper'>
                <div className='img'> 
                <Image 
                      src={item.img}
                      priority={true}
                      layout={'fill'} 
                      objectFit={'contain'}
                      alt=""
                    // width='700'
                    // height='900'
                    />
                </div> 
            <div className='title'>{item.title}</div>
                <div className='description'> {item.description} </div>
            </motion.div>)
            }

        </div>
      </div>
    )
}


export default Services
