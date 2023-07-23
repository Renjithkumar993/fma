import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from "../images/c1.jpg";
import image2 from "../images/c2.jpg";
import image3 from "../images/c3.jpg";
import image4 from "../images/c4.jpg";
import image5 from "../images/c5.jpg";
import image6 from "../images/c6.jpg";
import image7 from "../images/c7.jpg";

export default function Main() {
  const images = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' },
    { src: image4, alt: 'Image 3' },
    { src: image5, alt: 'Image 3' },
    { src: image6, alt: 'Image 3' },
    { src: image7, alt: 'Image 3' },
  ];

  const carouselStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const imageStyle = {
    objectFit: 'cover',
    width: '100%',
    height: '500px', // Set the desired height here
  };

  // Additional content and colors
  const leftSideContentStyle = {
    backgroundColor: 'purple',
    color: 'white',
    padding: '20px',
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  const rightSideContentStyle = {
    backgroundColor: 'orange',
    color: 'white',
    padding: '20px',
    position: 'absolute',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  return (
    <div style={{ width: '100%', justifyContent: 'center', position: 'relative' }}>
      <div style={carouselStyle}>
        <Carousel fade>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image.src}
                alt={image.alt}
                style={imageStyle}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {/* Left side content */}
      <div style={leftSideContentStyle}>
        <h3>Welcome to the Community Group!</h3>
        <p>We are the community group for Fredericton, Canada.</p>
      </div>
      {/* Right side content */}
      <div style={rightSideContentStyle}>
        <h3>Join Us Today!</h3>
        <p>Get involved in our events and activities.</p>
      </div>
    </div>
  );
}
