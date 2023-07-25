import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import malayaleeImage from '../images/c1.jpg';
import UsefulLinks from './UsefulLinks';
import MissionAndVision from './MissionAndVision';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobeAsia,
  faUsers,
  faHeart,
  faComments,
} from '@fortawesome/free-solid-svg-icons';

const FadingWords = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change the word every 2 seconds (adjust the duration as needed)

    return () => clearInterval(interval);
  }, [words]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        fontSize: '50px',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',

        color: 'green',
        padding: '20px',
        background: 'black',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        width: '100%',
      }}
    >
      {words[index]}
    </motion.div>
  );
};

const AboutUs = () => {
  // Framer Motion animation variants
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Words related to the community group
  const communityWords = [
    'Inclusiveness',
    'Diversity',
    'Tradition',
    'Culture',
    'Celebration',
    'Warmth',
    'Welcoming',
    'Memories',
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      className=" mt-5 bg-black text-white p-5 "
      
    >
      <div className="row align-items-center">
        <div className="col-md-6">
        <h2 className="title" style={{ fontFamily: 'Georgia, serif', fontSize: '50px', fontWeight: 'bold', color: 'white' }}>
              About Us
              </h2>
          <p>
            Welcome to the vibrant and diverse Malayalee Community Group in
            Fredericton, Canada. We are a group of individuals who share a
            common bond of Malayalam language and culture, hailing from the
            beautiful state of Kerala, India.
          </p>
          <p>
            Our community strives to foster inclusiveness and to create a
            warm and welcoming environment for everyone. We celebrate our
            rich cultural heritage through various events, festivals,
            cultural programs, and social gatherings.
          </p>
          <p>
            Whether you are a student, professional, family, or an individual
            with an interest in Malayalam culture, you are warmly invited to
            be a part of our community. Join us as we cherish our traditions,
            share our stories, and create beautiful memories together.
          </p>

          {/* Icons representing the community */}

        </div>
        <div className="col-md-6">
          <FadingWords words={communityWords}/>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="mr-4">
              <FontAwesomeIcon icon={faGlobeAsia} size="3x" />
              <p>International Community</p>
            </div>
            <div className="mr-4">
              <FontAwesomeIcon icon={faUsers} size="3x" />
              <p>Diverse Members</p>
            </div>
            <div className="mr-4">
              <FontAwesomeIcon icon={faHeart} size="3x" />
              <p>Warm and Welcoming</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faComments} size="3x" />
              <p>Engaging Events</p>
            </div>
          </div>
        </div>

      </div>
      <MissionAndVision />
      <UsefulLinks />
    </motion.div>
  );
};

export default AboutUs;
