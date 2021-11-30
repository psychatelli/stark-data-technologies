import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import './homeBanner.scss'



 const HomeBanner = () => {


const { scrollYProgress } = useViewportScroll();

const logoSymbolMotion = useTransform(scrollYProgress, [0, 0.2, 1], [0, -300, -950])
const logoTextMotion = useTransform(scrollYProgress, [0, 0.2, 1], [0, 300, 950])

    return (
        <div className='firstRowWrapper'>
                <div className='logoOverlay'>
                  <div className='logoOverlay-content'>
                    <motion.div 
                    style={{y: logoSymbolMotion}}
                    className='symbol'
                    animate='visible'
                    initial="hidden"
                    transition={{duration: 3, }}
                    variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -200, opacity: 0 }
                    }}
                    >
                      <Image 
                        src='/stark-data-technology-icon-lg.png'
                        priority={true}
                        layout={'fill'} 
                        objectFit={'contain'}
                        alt=""
                      // width='1200'
                      // height='900'
                      />
                    </motion.div>

                    <motion.div className='text'
                    style={{y: logoTextMotion}}
                    animate='visible'
                    initial="hidden"
                    transition={{duration: 4, delay: 2 }}
                    variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 }
                    }}
                    >
                      <Image 
                        src='/logo-items/text.png'
                        priority={true}
                        layout={'fill'} 
                        objectFit={'contain'}
                        alt=""
                      // width='1200'
                      // height='900'
                      />
                    </motion.div>
                  </div>
                </div>

                  <div className="homeBanner">
                      {/* <video  ref={videoPlayerOne} autoplay={true} muted loop  id="myVideo" onended="hideVideo()">
                        <source  src='/laser.mov' type="video/mp4"
                        />
                      </video> */}
                  </div>
        </div>
    )
}


export default HomeBanner
