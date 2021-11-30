import React, { useEffect} from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const industryList = [
    {
      icons: '',
      title: 'Medical'
    },
    {
     icons: '',
     title: 'Finance'
   },
   {
     icons: '',
     title: 'Tech'
   },
   {
     icons: '',
     title: 'Manufacturing'
   },
   {
     icons: '',
     title: 'Local Small Business'
   }
  ]

 const Industries = () => {
    const controls = useAnimation();
    const [industriesWrapper, inView] = useInView({threshold: .2})
    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
     }, [controls, inView]);

    return (
        <div>

        <h2>INDUSTRIES</h2>
            <div className='industry-list' ref={industriesWrapper}>
            {
            industryList.map((item, index) =>  <motion.div 
            animate={controls}
            initial="hidden"
            transition={{ duration: 3, delay: index * .5, ease: [0.68, -0.55, 0.265, 1.25]}}
            variants={{
            visible: { x: 0  },
            hidden: { x: -400 }
            }}
            key={item.icon} className='industry-list-item'>
                <div className='icon'> {item.icon}</div>
                <div className='title'> {item.title} </div>
            </motion.div>
                )
            }
            </div>
        </div>
    )
}


export default Industries
