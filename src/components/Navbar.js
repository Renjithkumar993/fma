import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./CustomNavbar.css";
import logoImage from "../images/logo.JPG"
function CollapsibleExample() {
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } },
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Navbar expand="lg" className="bg-light" fixed="top">
        <Container> {/* Wrap the component with Container */}
          <Navbar.Brand href="#home">
            <div className="d-flex align-items-center">
              <img src={logoImage} alt="Logo" className="logo" style={{ width: '70px' }} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto"> {/* Change 'mr-auto' to 'ml-auto' to align links to the right */}
              <Link
                className="nav-link"
                activeClass="active"
                to="joinUsSection"
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
                to="contactUsSection"
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
