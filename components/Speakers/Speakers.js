import  React, {useEffect, useState, useRef} from 'react'
import Image from 'next/image'
import styles from './speakers.module.scss'

const Speakers = () => {
    

    const [isVisible, setVisible] = useState(true);

    const domRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    //   return () => observer.unobserve(domRef.current);
    }, []);

    const videoOne = useRef()

    return (
            <div className="speakers">
            <div className='title'>
                <h2>SPEAKERS</h2>
            </div>

            <div className='speaker-intro-wrapper'>
                    <div className='intro-section'>
                    <h3>ALEX DEBELOV</h3>
<p>Alexander Debelov is a serial entrepreneur, previously being a co-founder of the Kairos Society, the world's largest student entrepreneurship organization, and Crelligence Media, award winning marketing company. His first major venture was Virool, a game changing online video advertising platform. Virool allows people to get the right people to watch their videos on the web. The way it works is by distributing video producers video content to the audience they want to reach through its network of blogs, social games and iPhone apps.
    In 2010, Alexander Debelov was named the Most Outstanding Entrepreneurship Student by the Entrepreneurship Division of Babson College (ranked as #1 in Entrepreneurship College), became the recipient of Paul of Greene Telecommunications Award and #1 place winner of John H. Muller Undergraduate Business Plan competition. He was also named Top 5 College Entrepreneurs by Entrepreneur Magazine in 2010. Currently, he is CEO of Go X. Go X offers Self-Driving Electric Scooter Sharing (www.goxapollo.com/)</p>
                    </div>

                    <div className='intro-section profile'>
                        <Image  src='/partners/alex.jpg' 
                        layout={'fill'} 
                      objectFit={'contain'}
                        />
                    </div>
            </div>


            <div className={`hexigonContainContainer ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
  
                

                <div className='speacker-img-wrapper'>
    

                       <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jBVMkh_WXhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className='speacker-img-wrapper' >
                     <iframe width="100%" height="100%" src="https://www.youtube.com/embed/wrsJUTkMgRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>

             
            </div> 

        </div>
    )
}

export default Speakers
