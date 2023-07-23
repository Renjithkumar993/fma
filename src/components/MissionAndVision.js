import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const MissionAndVision = () => {
  const [showMissionDialog, setShowMissionDialog] = useState(false);
  const [showVisionDialog, setShowVisionDialog] = useState(false);

  // Framer Motion animation variants
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Bigger Mission and Vision statements
  const missionStatement =
    'Our mission is to foster a united and vibrant community where every member feels welcomed, valued, and empowered to embrace their cultural heritage while contributing positively to the wider community. We strive to create an environment that encourages collaboration, creativity, and growth.';

  const visionStatement =
    'Our vision is to be a catalyst for building bridges between cultures, empowering individuals, and creating a harmonious and inclusive community that celebrates diversity and fosters mutual respect. We envision a future where everyone feels a sense of belonging and where differences are not only accepted but also ';

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      className="container mt-5"
    >
      <div className="card p-5" style={{ borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <h2 className="text-center mb-4">Mission and Vision</h2>
        <div className="row justify-content-between">
          <div className="col-md-5">
            <div className="text-center">
              <FontAwesomeIcon icon={faBullseye} style={{ fontSize: '3rem', color: '#003366' }} />
            </div>
            <h3 className="text-center mt-3 mb-3" style={{ color: '#003366' }}>Mission</h3>
            <p>{missionStatement}</p>
            <div className="text-center mt-3">
              <Button
                label="Read More"
                onClick={() => setShowMissionDialog(true)}
                className="p-button-info"
                icon="pi pi-search"
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="text-center">
              <FontAwesomeIcon icon={faEye} style={{ fontSize: '3rem', color: '#ff9900' }} />
            </div>
            <h3 className="text-center mt-3 mb-3" style={{ color: '#ff9900' }}>Vision</h3>
            <p>{visionStatement}</p>
            <div className="text-center mt-3">
              <Button
                label="Read More"
                onClick={() => setShowVisionDialog(true)}
                className="p-button-info"
                icon="pi pi-search"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PrimeReact Dialog for Mission */}
      <Dialog
        visible={showMissionDialog}
        onHide={() => setShowMissionDialog(false)}
        header="Mission Statement"
        footer={
          <Button
            label="Close"
            className="p-button-text"
            onClick={() => setShowMissionDialog(false)}
          />
        }
        breakpoints={{ '960px': '75vw' }}
      >
        <p>{missionStatement}</p>
      </Dialog>

      {/* PrimeReact Dialog for Vision */}
      <Dialog
        visible={showVisionDialog}
        onHide={() => setShowVisionDialog(false)}
        header="Vision Statement"
        footer={
          <Button
            label="Close"
            className="p-button-text"
            onClick={() => setShowVisionDialog(false)}
          />
        }
        breakpoints={{ '960px': '75vw' }}
      >
        <p>{visionStatement}</p>
      </Dialog>
    </motion.div>
  );
};

export default MissionAndVision;
