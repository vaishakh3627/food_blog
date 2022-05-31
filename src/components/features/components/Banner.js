import React from "react";

import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <Container fluid className="feature-banner">
      <Row>
        <Col xs={12} className="text-center">
          <h1>Why Choose Us</h1>
        </Col>
        <Col xs={12} className="text-center">
          <h4>
            Home <span>/</span> Features
          </h4>
        </Col>
      </Row>
    </Container>
  );
};
export default Banner;
