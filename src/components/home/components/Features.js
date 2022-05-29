import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";

import Feature1 from "../../../assets/img/feature-1.jpg";
import Feature2 from "../../../assets/img/feature-2.jpg";
import Feature3 from "../../../assets/img/feature-3.jpg";
import Feature4 from "../../../assets/img/feature-4.jpg";
import Cheff from "../../../assets/img/chef-hat.png";
import Pumpkin from "../../../assets/img/pumpkin.png";
import Medal from "../../../assets/img/medal.png";
import Meat from "../../../assets/img/proteins.png";
import Delivery from "../../../assets/img/delivery.png";
import Beef from "../../../assets/img/steak.png";

const Features = () => {
  return (
    <Container className="features-wrapper">
      <Row className="features-wrapper-row">
        <Col lg={5} md={5} sm={12} className="p-3">
          <Row>
            <Col xs={12} className="p-0">
              <h5>Why Choose Us</h5>
            </Col>
            <Col xs={12} className="mb-3 p-0">
              <h1>Our Key Features</h1>
            </Col>
            <Col xs={12}>
              <Row className="feature-image-wrapper">
                <Col xs={6} className="p-0 feature1-image-content">
                  <img src={Feature1} alt="food" className="feature1-images" />
                </Col>
                <Col xs={6} className="p-0">
                  <img src={Feature2} alt="food" className="feature2-images" />
                </Col>
                <Col xs={6} className="p-0 feature1-image-content">
                  <img src={Feature3} alt="food" className="feature3-images" />
                </Col>
                <Col xs={6} className="p-0">
                  <img src={Feature4} alt="food" className="feature4-images" />
                </Col>
              </Row>
            </Col>
            <Col xs={12} className="mt-4 mb-3 p-0">
              <p>
                Lorem ipsum dolor sit amet consec adipis elit. Phasel nec preti
                mi. Curabit facilis ornare velit non vulputa. Aliquam metus
                tortor, auctor id gravida condime, viverra quis sem. Curabit non
                nisl nec nisi sceleri maximus
              </p>
            </Col>
            <Col xs={12} className="p-0">
              <Button className="book-a-table-button mb-5">Book A Table</Button>
            </Col>
          </Row>
        </Col>
        <Col lg={7} md={7} sm={12}>
          <Row className="p-4 feature-details">
            <Col lg={6} md={6} sm={12} className="mb-3">
              <Row>
                <Col xs={12} className="mb-3">
                  <img src={Cheff} alt="cheff" style={{ width: "25%" }} />
                </Col>
                <Col xs={12}>
                  <h4>World’s best Chef</h4>
                </Col>
                <Col xs={12}>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasel nec preti mi.
                    Curabit facilis ornare velit non vulput metus tortor
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12} className="mb-3">
              <Row>
                <Col xs={12} className="mb-3">
                  <img src={Pumpkin} alt="cheff" style={{ width: "25%" }} />
                </Col>
                <Col xs={12}>
                  <h4>Natural ingredients</h4>
                </Col>
                <Col xs={12}>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasel nec preti mi.
                    Curabit facilis ornare velit non vulput metus tortor
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12} className="mb-3">
              <Row>
                <Col xs={12} className="mb-3">
                  <img src={Medal} alt="cheff" style={{ width: "25%" }} />
                </Col>
                <Col xs={12}>
                  <h4>Best quality products</h4>
                </Col>
                <Col xs={12}>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasel nec preti mi.
                    Curabit facilis ornare velit non vulput metus tortor
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12} className="mb-3">
              <Row>
                <Col xs={12} className="mb-3">
                  <img src={Meat} alt="cheff" style={{ width: "25%" }} />
                </Col>
                <Col xs={12}>
                  <h4>Fresh vegetables & Meet</h4>
                </Col>
                <Col xs={12}>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasel nec preti mi.
                    Curabit facilis ornare velit non vulput metus tortor
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col xs={12} className="mb-3">
                  <img src={Delivery} alt="cheff" style={{ width: "25%" }} />
                </Col>
                <Col xs={12}>
                  <h4>Fastest door delivery</h4>
                </Col>
                <Col xs={12}>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasel nec preti mi.
                    Curabit facilis ornare velit non vulput metus tortor
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col xs={12} className="mb-3">
                  <img src={Beef} alt="cheff" style={{ width: "25%" }} />
                </Col>
                <Col xs={12}>
                  <h4>Ground beef & Low fat</h4>
                </Col>
                <Col xs={12}>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasel nec preti mi.
                    Curabit facilis ornare velit non vulput metus tortor
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Features;
