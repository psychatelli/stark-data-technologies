

 const realEstateProductPriceKey = () => {
    const prod = process.env.NODE_ENV === 'production'
    return prod ? liveRealEstateProducts :devRealEstateProducts
}

export default realEstateProductPriceKey


const liveRealEstateProducts = {
    photos2500: 'price_1IxyvHD2B2kqWDmPn2I17pI2',
    photosVides2500: 'price_1Ixyv7D2B2kqWDmP7NZiT4BX',
    photos25004000: 'price_1IxyumD2B2kqWDmPIEm7nwUt',
    photosVideos25004000: 'price_1IxyuWD2B2kqWDmPpOSIVXkN',
    photos4000: 'price_1IxyvuD2B2kqWDmPkwXI70aV',
    photosVideos4000: 'price_1IxyvuD2B2kqWDmPkwXI70aV'
}

const devRealEstateProducts = {
    photos2500: 'price_1IxuyFD2B2kqWDmPklb99Jw2',
    photosVides2500: 'price_1IxuzyD2B2kqWDmPdNm6VMov',
    photos25004000: 'price_1Ixv4ZD2B2kqWDmPfc30BqfY',
    photosVideos25004000: 'price_1IxxVcD2B2kqWDmPxeoUihFK',
    photos4000: 'price_1IxxX3D2B2kqWDmP3H9JW1ju',
    photosVideos4000: 'price_1IxxYJD2B2kqWDmPmXhHvZkS'
}