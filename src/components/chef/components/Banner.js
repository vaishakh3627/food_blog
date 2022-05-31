import React from "react";

import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <Container fluid className="chef-banner">
      <Row>
        <Col xs={12} className="text-center">
          <h1>Master Chef</h1>
        </Col>
        <Col xs={12} className="text-center">
          <h4>
            Home <span>/</span> Chef
          </h4>
        </Col>
      </Row>
    </Container>
  );
};
export default Banner;
