import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <Container fluid className="banner-wrapper">
      <Row>
        <Col xs={12} className="d-flex justify-content-center mb-3">
          <h1>
            World's <span className="best">Best</span> Food
          </h1>
        </Col>
        <Col xs={12} className="d-flex justify-content-center text-center mt-2 mb-2">
          <h5>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </h5>
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <Row>
            <Col
              xs={5}
              style={{ width: "10rem", height: "5rem" }}
              className="d-flex align-items-center justify-content-center"
            >
              <Button variant="warning" className="view-menu-button">
                View Menu
              </Button>
            </Col>
            <Col
              xs={5}
              style={{ width: "10rem", height: "5rem" }}
              className="d-flex align-items-center justify-content-center"
            >
              <Button variant="success" className="book-table-button">Book Table</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Banner;
