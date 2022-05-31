import { React, useState } from "react";

import { Button, Col, Container, FormControl, Row } from "react-bootstrap";

import { MdLocationPin, MdLocalPhone, MdEmail } from "react-icons/md";
import { RiShareForwardFill, RiInstagramLine } from "react-icons/ri";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactUs = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const updateData = (data) => {
    setData((previousState) => ({
      ...previousState,
      ...data,
    }));
  };

  const handleButton = () => {
    console.log(data);
    setData({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <Container fluid className="contact-page-wrapper mb-5">
      <Row>
        <Col xs={12} className="text-center">
          <h5>Contact Us</h5>
        </Col>
        <Col xs={12} className="contact-page-heading">
          <h1>Contact For Any Query</h1>
        </Col>
        <Col xs={12} className="contact-page-details">
          <Row className="contact-details-row">
            <Col lg={3} md={3} sm={12} className="contact-details-column">
              <Col xs={4} className="contact-details-column">
                <div className="contact-details-icon">
                  <MdLocationPin size={20} />
                </div>
              </Col>
              <Col xs={8}>
                <h5>Address</h5>
                <p>123 Street, NY, USA</p>
              </Col>
            </Col>
            <Col lg={3} md={3} sm={12} className="contact-details-column">
              <Col xs={4} className="contact-details-column">
                <div className="contact-details-icon">
                  <MdLocalPhone size={20} />
                </div>
              </Col>
              <Col xs={8}>
                <h5>Call Us</h5>
                <p>+012 345 6789</p>
              </Col>
            </Col>
            <Col lg={3} md={3} sm={12} className="contact-details-column">
              <Col xs={4} className="contact-details-column">
                <div className="contact-details-icon">
                  <MdEmail size={20} />
                </div>
              </Col>
              <Col xs={8}>
                <h5>Email Us</h5>
                <p>info@example.com</p>
              </Col>
            </Col>
            <Col lg={3} md={3} sm={12} className="contact-details-column">
              <Col xs={4} className="contact-details-column">
                <div className="contact-details-icon">
                  <RiShareForwardFill size={20} />
                </div>
              </Col>
              <Col xs={8}>
                <h5>Follow Us</h5>
                <div>
                  <FaTwitter className="me-1 contact-social-icon" />
                  <FaFacebookF className="me-1 contact-social-icon" />
                  <FaYoutube className="me-1 contact-social-icon" />
                  <RiInstagramLine className="me-1 contact-social-icon" />
                  <FaLinkedinIn className="me-1 contact-social-icon" />
                </div>
              </Col>
            </Col>
          </Row>
        </Col>
        <Col xs={12} className="google-map-wrapper">
          <Row className="google-map-row">
            <Col lg={6} md={6} sm={12} className="google-map"></Col>
            <Col lg={6} md={6} sm={12} className="contact-form p-5">
              <FormControl
                placeholder="Your name"
                className="mb-2 mt-0 form-input"
                value={data.name}
                onChange={(e) => updateData({ ...data, name: e.target.value })}
              />
              <FormControl
                placeholder="Your email"
                className="mb-2 mt-2 form-input"
                value={data.email}
                onChange={(e) => updateData({ ...data, email: e.target.value })}
              />
              <FormControl
                placeholder="subject"
                className="mb-2 mt-2 form-input"
                value={data.subject}
                onChange={(e) =>
                  updateData({ ...data, subject: e.target.value })
                }
              />
              <FormControl
                as="textarea"
                placeholder="Message"
                rows={8}
                className="mb-2 mt-2 form-input"
                value={data.message}
                onChange={(e) =>
                  updateData({ ...data, message: e.target.value })
                }
              />
              <Button className="contact-form-button" onClick={handleButton}>
                Send Message
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default ContactUs;
