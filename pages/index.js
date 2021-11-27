import React, { useRef, useEffect } from 'react'

import PageHead from '../components/head'
import Image from 'next/image'
import Speakers from '../components/Speakers/Speakers';
import HomeBanner from '../components/HomePageComponents/homeBanner/homeBanner';
import Link from 'next/link'
import styles from './homeStyles.scss'
import Services from '../components/HomePageComponents/Services/services';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EmailIcon from '@mui/icons-material/Email';

 const Home = () => {


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


  return (
    <div className='home'>
      <PageHead
      title='Techup Tampa- Home'
      description='Techup Tampa Building our Community'
      />

      
      <HomeBanner/>
      <Services />
       


        <div className='two-column-row'>


            <div className='left-column'>
                  <h2>INDUSTRIES</h2>
                  <div className='industry-list'>
                  {
                    industryList.map(item =>  <div key={item.icon} className='industry-list-item'>
                      <div className='icon'> {item.icon}</div>
                      <div className='title'> {item.title} </div>
                    </div>
                  )
                  }
                  </div>
                  
                  
            </div>

            <div className='right-column'
            style ={ { background: "url('/tech-background.jpg') no-repeat center center / cover" } }>
                    
                    <div className='content-wrapper'>
                        <div className='message'>Contact Us To Get Started</div>
                        <div className='contact-box'> <PermPhoneMsgIcon /> Sales: 415-488-7780</div>

                        <div className='contact-box'><EmailIcon /> support@starkdatatechnologies.com</div>
                    </div>
            </div>
        </div>
 


    </div>
  )
}


export default Home;
