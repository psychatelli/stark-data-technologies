import React from 'react'
import Image from 'next/image'
import './homeBanner.scss'

 const HomeBanner = () => {
    return (
        <div className='firstRowWrapper'>
                <div className='logoOverlay'>
                  <div className='logoOverlay-content'>
                    <Image 
                      src='/stark-data-technologies-logo.png'
                      priority={true}
                    //   layout={'fill'} 
                    //   objectFit={'contain'}
                    //   alt=""
                    width='700'
                    height='900'
                    />

                  
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
