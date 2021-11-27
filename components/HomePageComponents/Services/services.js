import React from 'react'
import Image from 'next/image'
import './services.scss'

 const Services = () => {


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
        
        <div className='header-section'>
                <h3>Bringing You The Next Generation Of Tech</h3>
        <p>This si the desilckcnf dthat This si the desilckcnf dthat is aam going to showcase inthe description is aam going to showcase inthe description</p>      
        </div>

        <div className='service-items-wrapper'>
            {
                descriptionBlockContent.map(item => <div key={item.title} className='service-item-wrapper'>
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
            </div>)
            }

        </div>
      </div>
    )
}


export default Services
