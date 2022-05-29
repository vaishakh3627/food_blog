import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";

import Account from "../../../assets/img/about.jpg";

const AboutUs = () => {
  return (
    <Container fluid className="aboutus-wrapper">
      <Row>
        <Col lg={6} md={6} sm={12} className="about-image-wrapper">
          <img src={Account} alt="account" className="about-image" />
        </Col>
        <Col lg={5} md={6} sm={12} className="about-details mt-3">
          <Row>
            <Col xs={12}>
              <h5>About Us</h5>
            </Col>
            <Col xs={12}>
              <h1>Cooking Since 1990</h1>
            </Col>
            <Col x={12} className="mt-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                viverra quis sem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                viverra quis sem. Curabitur non nisl nec nisi scelerisque
                maximus. Aenean consectetur convallis porttitor. Aliquam
                interdum at lacus non blandit.
              </p>
            </Col>
            <Col xs={12} className="mt-2">
              <Button className="book-a-table-button">Book A Table</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutUs;
