import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>Made with <FontAwesomeIcon icon={faHeart} className="text-danger" /> by Fredericton Malayalee Association</p>
    </footer>
  );
}

export default Footer;
