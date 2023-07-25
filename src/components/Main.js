import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Row } from 'primereact/row';
import { Column } from 'primereact/column';
import image11 from '../images/c11.jpg';

export default function Main() {
  const landingStyle = {
    width: '100%',
    height: '100vh', // Adjust the height as needed
    backgroundImage: `url(${image11})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Montserrat, sans-serif', // Update the font family to a modern one
  };

  const contentStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '40px',
    textAlign: 'center',
  };

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    animate: {
      rotate: 360, // Rotate the image 360 degrees
      transition: {
        duration: 5, // Duration of the animation
        repeat: Infinity, // Repeat the animation infinitely
        ease: 'linear', // Linear easing for a smooth continuous animation
      },
    },
  };

  return (
    <motion.div
      style={landingStyle}
      className='mt-5'
      initial='hidden'
      animate='visible'
      variants={variants}
      transition={{ duration: 0.8 }}
    >
      <div style={contentStyle}>

        <h1 style={{ fontSize: '48px', marginBottom: '20px', fontWeight: 'bold' }}>
          Fredericton Malayalee Association
        </h1>
        <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
          Welcome to the Fredericton Malayalee Association website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aenean varius turpis at quam ultricies blandit. Nullam vel
          orci eu felis cursus luctus.
        </p>
        {/* Add more content here, such as buttons or links */}
        <Row className='mt-4' gutter={0.5} justifyContent='center'>
          <Column xs='12' sm='6' md='4'>
            <Card>
              <h3>Event 1</h3>
              <p>Description of Event 1</p>
              <Button label='Learn More' />
            </Card>
          </Column>
          <Column xs='12' sm='6' md='4'>
            <Card>
              <h3>Event 2</h3>
              <p>Description of Event 2</p>
              <Button label='Learn More' />
            </Card>
          </Column>
          {/* Add more cards for other events */}
        </Row>
      </div>
    </motion.div>
  );
}
