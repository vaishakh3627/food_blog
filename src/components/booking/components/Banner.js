import React from "react";

import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <Container fluid className="booking-banner">
      <Row>
        <Col xs={12} className="text-center">
          <h1>Book A Table</h1>
        </Col>
        <Col xs={12} className="text-center">
          <h4>
            Home <span>/</span> Booking
          </h4>
        </Col>
      </Row>
    </Container>
  );
};
export default Banner;
