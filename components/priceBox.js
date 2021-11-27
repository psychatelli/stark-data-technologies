import React from 'react'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import VideocamIcon from '@material-ui/icons/Videocam';
import CheckoutButton from './CheckoutButton/checkoutButton'
import Link from 'next/link'

 
const PriceBox = ({mainTitle, photoPrice, videoPrice, price_id, cancelPath, icon, donateBtn = false }) => {

    console.log('box')
    return (
        <div className='priceBox'>
            <div className='PriceBoxRow mainTitleSection'>
                {icon}
                <div className='priceBoxCell'> {mainTitle} </div>
            </div>
  
        <div className='PriceBoxDetailsWrapper'>
                    <div className='PriceBoxColumn rightBorder'>
                        <div className='priceBoxCell serviceTitle'> 
                        <div> <PhotoCameraIcon/></div>
                        (Photos)
                        </div>
                        <div className='priceBoxCell price'> {photoPrice}</div>
                        {donateBtn ? <Link  href='/ourhouse-photography-donation'><div className='donateBtn'> Donate </div></Link> : <CheckoutButton cancelPath={cancelPath}  price_id={price_id.photos}/>}                    
                        </div>

                    <div className='PriceBoxColumn'>
                        <div className='priceBoxCell serviceTitle'> 
                        <div>
                        <PhotoCameraIcon/>
                        <VideocamIcon/>
                        </div>
                        (Photos & videos)
                        </div>
                        <div className='priceBoxCell price'>{videoPrice}</div>
                        
                        {donateBtn ? <Link  href='/ourhouse-photography-donation'><div className='donateBtn'> Donate </div></Link> : <CheckoutButton cancelPath={cancelPath}  price_id={price_id.photoVideo}/>}
                        
                    </div>
        </div>
            
       
        </div>
    )
}

export default PriceBox;


