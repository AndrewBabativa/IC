import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import './ImageCarousel.css';

interface CarouselProps {
  images: string[]; 
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
    return (
      <div className="image-carousel-container">
        <Carousel className="carousel" autoPlay infiniteLoop interval={4000} showThumbs={false}>
          {images.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Slide ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

export default ImageCarousel;
