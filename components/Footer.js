
 const Footer = () => {
    let year =  new Date().getFullYear();


    return (
        <div className='footer'>
            <p>Stark Data Technologies - Copyright © {year}</p>
        </div>
    )
}


export default Footer;
