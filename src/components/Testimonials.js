import React, { useState, useEffect } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { Button } from 'primereact/button';
import { motion } from 'framer-motion';

const testimonialsData = [
    {
      id: 1,
      name: 'John Doe',
      photo: 'https://via.placeholder.com/150',
      quote: 'The Fredericton Malayalaee Association has been an amazing community to be a part of. I have made lifelong friends and unforgettable memories here.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: 'https://via.placeholder.com/150',
      quote: 'Being a member of the Fredericton Malayalaee Association has given me a sense of belonging and a platform to celebrate our culture together.',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      photo: 'https://via.placeholder.com/150',
      quote: 'I am proud to be a part of the Fredericton Malayalaee Association. It has enriched my life with cultural experiences and cherished friendships.',
    },
    {
      id: 4,
      name: 'Emily Chen',
      photo: 'https://via.placeholder.com/150',
      quote: 'The events organized by the association are always a delight! I have learned so much about our culture and traditions through these gatherings.',
    },
    {
      id: 5,
      name: 'Robert Williams',
      photo: 'https://via.placeholder.com/150',
      quote: 'Joining the Fredericton Malayalaee Association was the best decision I made. It feels like a second family, and I feel connected to my roots.',
    },
  ];
  
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white bg-dark p-5" >
      <h2 className="text-center mb-4">What Members Say</h2>
      <Carousel activeIndex={activeIndex} onSelect={(index) => setActiveIndex(index)}>
        {testimonialsData.map((testimonial) => (
          <Carousel.Item key={testimonial.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-card text-center p-4">
                <img src={testimonial.photo} alt={testimonial.name} className="rounded-circle mb-3" />
                <h5 className="mb-2">{testimonial.name}</h5>
                <p>{testimonial.quote}</p>
              </div>
            </motion.div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
