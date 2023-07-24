import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    membershipType: '',
    email: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    province: '',
    city: '',
    postalCode: '',
    spouseName: '',
    spouseContactNumber: '',
    yourPhoto: null,
    spousePhoto: null,
    familyPhoto: null,
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Implement your logic to send the form data and uploaded files to the backend
      // For now, we'll just log the form data to the console
      console.log(formData);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error states
    }
  };

  return (
    <div className="register-container py-5 bg-light mt-5">
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <div className="register-form mt-5">
              <h2 className="text-center mb-4">MEMBER REGISTRATION</h2>
              <p className="text-center text-muted mb-4">
                All fields with * are required.
              </p>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="fullName">
                  <Form.Label>Full Name*</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="membershipType">
                  <Form.Label>Membership Type*</Form.Label>
                  <Form.Control
                    as="select"
                    name="membershipType"
                    value={formData.membershipType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Membership Type</option>
                    <option value="single">Single</option>
                    <option value="family">Family</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="phoneNumber">
                  <Form.Label>Phone Number*</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <h4 className="mt-4">Address Details</h4>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="addressLine1">
                      <Form.Label>Address Line 1</Form.Label>
                      <Form.Control
                        type="text"
                        name="addressLine1"
                        value={formData.addressLine1}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="addressLine2">
                      <Form.Label>Address Line 2</Form.Label>
                      <Form.Control
                        type="text"
                        name="addressLine2"
                        value={formData.addressLine2}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <Form.Group controlId="province">
                      <Form.Label>Province</Form.Label>
                      <Form.Control
                        type="text"
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="city">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="postalCode">
                      <Form.Label>Postal Code</Form.Label>
                      <Form.Control
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                {formData.membershipType === 'family' && (
                  <>
                    <h4 className="mt-4">Family Details</h4>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="spouseName">
                          <Form.Label>Spouse Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="spouseName"
                            value={formData.spouseName}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="spouseContactNumber">
                          <Form.Label>Spouse's Contact Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="spouseContactNumber"
                            value={formData.spouseContactNumber}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </>
                )}

                {/* Additional field for additional information */}
                <h4 className="mt-4">Additional Information</h4>
                <Form.Group controlId="additionalInfo">
                  <Form.Label>Any Additional Information</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder="Tell us more about yourself..."
                  />
                </Form.Group>

                {/* Additional fields for photo uploads */}
                <h4 className="mt-4">Upload Photos</h4>
                <Form.Group controlId="yourPhoto">
                  <Form.Label>Your Photo</Form.Label>
                  <Form.Control
                    type="file"
                    name="yourPhoto"
                    onChange={handleFileChange}
                  />
                </Form.Group>
                {formData.membershipType === 'family' && (
                  <>
                    <Form.Group controlId="spousePhoto">
                      <Form.Label>Spouse Photo</Form.Label>
                      <Form.Control
                        type="file"
                        name="spousePhoto"
                        onChange={handleFileChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="familyPhoto">
                      <Form.Label>Family Photo</Form.Label>
                      <Form.Control
                        type="file"
                        name="familyPhoto"
                        onChange={handleFileChange}
                      />
                    </Form.Group>
                  </>
                )}

                <Form.Group controlId="termsOfService">
                  <Form.Check
                    type="checkbox"
                    label="By clicking Register you agree to our terms of service"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="btn-block">
                  Register
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
