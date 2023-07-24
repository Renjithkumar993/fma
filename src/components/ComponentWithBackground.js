import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import image1 from "../images/c4.jpg"
import { Link } from 'react-router-dom';

const ComponentWithBackground = () => {
  const { scrollYProgress } = useViewportScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 100]); // Adjust the value (100) as per the desired parallax effect

  return (
    <div
    className="component-container bg-secondary py-5 position-relative overflow-hidden"
    style={{
      background: `url(${image1})`, // Use url() to specify the background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          transform: `translateY(${translateY}px)`,
        }}
      ></motion.div>
      <div className="background-overlay"></div>
      <Container>
        <Row>
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="location-info  p-4 rounded shadow text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" />
              </motion.div>
              <h2 className="mb-4">Kerala</h2>
              <p>
                Kerala is a state in India, known for its natural beauty,
                backwaters, and vibrant culture. It is the homeland of the
                Malayalee community.
              </p>
              <a href="#" className="learn-more-btn btn btn-primary">
                Learn More
              </a>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="location-info p-4 text-white rounded shadow"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" />
              </motion.div>
              <h2 className="mb-4">Fredericton</h2>
              <p>
                Fredericton is the capital city of New Brunswick, Canada. It is
                a diverse and welcoming city where the Malayalee community has
                found a home away from home.
              </p>
              <a href="#" className="learn-more-btn btn btn-primary">
                Learn More
              </a>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="location-info text-white p-4 rounded shadow"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" />
              </motion.div>
              <h2 className="mb-4">New Brunswick</h2>
              <p>
                New Brunswick is one of Canada's beautiful maritime provinces,
                known for its stunning landscapes, friendly people, and rich
                history.
              </p>
              <a href="#" className="learn-more-btn btn btn-primary">
                Learn More
              </a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ComponentWithBackground;
