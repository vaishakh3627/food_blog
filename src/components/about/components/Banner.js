import React from "react";

import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <Container fluid className="about-banner">
      <Row>
        <Col xs={12} className="text-center">
          <h1>About Us</h1>
        </Col>
        <Col xs={12} className="text-center">
          <h4>
            Home <span>/</span> AboutUs
          </h4>
        </Col>
      </Row>
    </Container>
  );
};
export default Banner;
