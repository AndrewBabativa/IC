import React from 'react';
import './Banner.css';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

const images = [
    'https://okdiario.com/img/2022/09/11/nasa-gywfpvi2jzm-unsplash-1-655x368.jpg',
    'https://images.ecestaticos.com/lJzqrFaXAt1_1bCl6AN-hzNLdPM=/0x19:993x539/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8d7%2Fbf4%2F2f8%2F8d7bf42f834cda9ac1da9f273a289343.jpg  ',
    'https://img.asmedia.epimg.net/resizer/GNdoW2xrMWnTdBGk5Cy_fo_1Ayw=/644x362/filters:focal(1548x892:1558x902)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/RKHKL5J6P5GRSLWKVTNY5GSPTE.jpg',

];

const Banner: React.FC = () => {

    return (
        <section className='group-65'>
            <div className="expand-horizons">
                <ImageCarousel images={images} /> {/* Render the ImageCarousel component */}
            </div>
            <div className="banner">
            </div>
        </section>
    );
};

export default Banner;
