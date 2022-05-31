import React from "react";

import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <Container fluid className="contact-banner">
      <Row>
        <Col xs={12} className="text-center">
          <h1>Contact Us</h1>
        </Col>
        <Col xs={12} className="text-center">
          <h4>
            Home <span>/</span> Contact
          </h4>
        </Col>
      </Row>
    </Container>
  );
};
export default Banner;
