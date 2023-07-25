import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./CustomNavbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

function CollapsibleExample() {
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } },
  };
  const fmaLogoStyle = {
 // Yellow color representing prosperity and warmth
    color: '#FFFFFF', // White text for contrast
    padding: '15px',
    borderRadius: '10px', // Rounded corners
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Drop shadow for depth
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Navbar expand="lg" className="bg-black" fixed="top">
        <Container> {/* Wrap the component with Container */}
        <Navbar.Brand href="/">
        <div style={fmaLogoStyle}>
          <span style={{ marginRight: '8px' }}>🌴</span> {/* Palm tree emoji for Kerala */}
          FMA
          <span style={{ marginLeft: '8px' }}>🍁</span> {/* Maple leaf emoji for Canada */}
        </div>
      </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FontAwesomeIcon icon={faBars} beat size="2xl" style={{color: "#fcfcfc",}} />
            </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
        
            <Nav className="ml-auto"> {/* Change 'mr-auto' to 'ml-auto' to align links to the right */}
              {/* Use the Link component with the 'to' prop set to '/register' */}
              <Link
                to="/"
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="rest"
                  className="box-gradient"
                >
                  Home
                </motion.div>
              </Link>
              <Link
                to="/register"
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="rest"
                  className="box-gradient"
                >
                  Join Us
                </motion.div>
              </Link>
              <Link
                className="nav-link"
                activeClass="active"
                to="contactUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="rest"
                  className="box-gradient"
                >
                  Contact Us
                </motion.div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Toolbar />
    </motion.div>
  );
}

export default CollapsibleExample;
