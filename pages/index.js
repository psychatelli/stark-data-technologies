import React, { useRef, useEffect } from 'react'

import PageHead from '../components/head'
import HomeBanner from '../components/HomePageComponents/homeBanner/homeBanner';
import Services from '../components/HomePageComponents/Services/services';
import Industries from '../components/HomePageComponents/Industries/industries';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EmailIcon from '@mui/icons-material/Email';

 const Home = () => {


  return (
    <div className='home'>
      <PageHead
      title='Stark Data Technologies'
      description='Bringing You The Next Generation Of Tech'
      />
      <HomeBanner/>
      <Services />
        <div className='two-column-row'>


            <div className='left-column'>
                  <Industries />
            </div>

            <div className='right-column'
            style ={ { background: "url('/tech-background.jpg') no-repeat center center / cover" } }>
                    
                    <div className='content-wrapper'>
                        <div className='message'>Contact Us To Get Started</div>
                        <div className='contact-box'> <PermPhoneMsgIcon /> Sales: 615-295-5280</div>
                        <div className='contact-box'><EmailIcon /> support@starkdatatch.com</div>
                    </div>
            </div>
        </div>
 


    </div>
  )
}


export default Home;
