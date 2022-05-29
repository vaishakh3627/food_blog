import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import Burger from "../../../assets/img/burger.svg";

const Products = () => {
  return (
    <Container fluid className="products-wrapper mb-4">
      <Row className="product-row-wrapper">
        <Col lg={4} md={4} sm={12} className="product-col-wrapper">
          <div className="products">
            <Row>
              <Col xs={12} className="d-flex justify-content-center p-2">
                <div className="burger-image" />
              </Col>
              <Col xs={12} className="text-center">
                <h3>Burgers</h3>
              </Col>
              <Col xs={12} className="text-center pe-4 px-4">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                  Curabit facilis ornare velit non vulputa. Aliquam metus tortor
                  auctor quis sem.
                </p>
              </Col>
              <Col xs={12} className="text-center">
                <a href="#">View Menu</a>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4} md={4} sm={12} className="product-col-wrapper">
          <div className="products">
            <Row>
              <Col xs={12} className="d-flex justify-content-center p-2">
                <div className="snack-image" />
              </Col>
              <Col xs={12} className="text-center">
                <h3>Snacks</h3>
              </Col>
              <Col xs={12} className="text-center pe-4 px-4">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                  Curabit facilis ornare velit non vulputa. Aliquam metus tortor
                  auctor quis sem.
                </p>
              </Col>
              <Col xs={12} className="text-center">
                <a href="#">View Menu</a>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4} md={4} sm={12} className="product-col-wrapper">
          <div className="products">
            <Row>
              <Col xs={12} className="d-flex justify-content-center p-2">
                <div className="beverage-image" />
              </Col>
              <Col xs={12} className="text-center">
                <h3>Burgers</h3>
              </Col>
              <Col xs={12} className="text-center pe-4 px-4">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                  Curabit facilis ornare velit non vulputa. Aliquam metus tortor
                  auctor quis sem.
                </p>
              </Col>
              <Col xs={12} className="text-center">
                <a href="#">View Menu</a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Products;
