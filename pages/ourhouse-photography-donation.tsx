import { NextPage } from 'next'
import { Elements } from '@stripe/react-stripe-js'
import getStripe from '../utilities/get-stripejs'
import DonateForm from '../components/DonateForm/DonateForm'
import PageHead from '../components/head'

import Image from 'next/image'


const Donate: NextPage = () => {
  return (
      <div className="ourHouseDonation">

          <PageHead
            title='Adamedia Design - Our House Photography Donations'
            description='Our House Photography Donations'
        />

        <div className='contentWrapper'> 

        <div className='ourHouseLogo'>
               <Image
                src="/our-house-logo-black.png"
                alt="our house logo"
                width={100}
                height={75}
                />
          </div>

          <h2>We Appreciate Your Support!</h2>


          <div className='donationToolWrapper'>
          <Elements stripe={getStripe()}>
            <DonateForm />
          </Elements>
          </div>
          
          </div>

        </div>
       
  )
}

export default Donate