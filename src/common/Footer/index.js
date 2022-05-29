import { React, useState } from "react";

import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

import {
  MdLocationOn,
  MdCall,
  MdEmail,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "./style.scss";

const Footer = () => {
  const [data, setData] = useState({
    email: "",
  });

  const updateData = (data) => {
    setData((previousState) => ({
      ...previousState,
      ...data,
    }));
  };

  const handleButton = () => {
    console.log(data);
    setData({ email: "" });
  };

  return (
    <Container fluid className="footer-wrapper">
      <Row className="footer-content-row">
        <Col lg={4} md={4} sm={12} className="px-5 footer-content-address">
          <Row className="px-2 media-size">
            <Col xs={12} className="p-3 mt-5 media-size-column">
              <h5>Our Address</h5>
            </Col>
            <Col xs={12}>
              <p>
                <i className="me-2">
                  <MdLocationOn size={20} color="rgb(251, 175, 50)" />
                </i>
                123 Street, New York, USA
              </p>
            </Col>
            <Col xs={12}>
              <p>
                <i className="me-2">
                  <MdCall size={20} color="rgb(251, 175, 50)" />
                </i>
                +012 345 67890
              </p>
            </Col>
            <Col xs={12}>
              <p>
                <i className="me-2">
                  <MdEmail size={20} color="rgb(251, 175, 50)" />
                </i>
                info@example.com
              </p>
            </Col>
            <Col xs={12} className="mt-2 social-media-wrapper">
              <div className="social-media">
                <FaTwitter size={20} />
              </div>
              <div className="social-media">
                <FaFacebook size={20} />
              </div>
              <div className="social-media">
                <FaYoutube size={20} />
              </div>
              <div className="social-media">
                <FaInstagram size={20} />
              </div>
              <div className="social-media">
                <FaLinkedinIn size={20} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} md={3} sm={12} className="px-5 footer-content-links">
          <Row className="px-2 media-size">
            <Col xs={12} className="p-3 mt-5 media-size-column">
              <h5>Quick Links</h5>
            </Col>
            <Col xs={12}>
              <p>
                <i className="me-2">
                  <MdOutlineArrowForwardIos color="rgb(251, 175, 50)" />
                </i>
                Terms of use
              </p>
            </Col>
            <Col xs={12}>
              <p>
                <i className="me-2">
                  <MdOutlineArrowForwardIos color="rgb(251, 175, 50)" />
                </i>
                Privacy policy
              </p>
            </Col>
            <Col xs={12}>
              <p>
                <i className="me-2">
                  <MdOutlineArrowForwardIos color="rgb(251, 175, 50)" />
                </i>
                Cookies
              </p>
            </Col>
            <Col xs={12}>
              <p>
                <i className="me-2">
                  <MdOutlineArrowForwardIos color="rgb(251, 175, 50)" />
                </i>
                Help
              </p>
            </Col>
            <Col xs={12}>
              <p>
                <i className="me-2">
                  <MdOutlineArrowForwardIos color="rgb(251, 175, 50)" />
                </i>
                FQAs
              </p>
            </Col>
          </Row>
        </Col>
        <Col lg={5} md={5} sm={12} className="px-5 footer-content-news">
          <Row className="media-size">
            <Col xs={12} className="p-3 mt-5 media-size-column">
              <h5>Newsletter</h5>
            </Col>
            <Col xs={12}>
              <p>
                Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum
                nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis
                felis, sed lacus neque id eros.
              </p>
            </Col>
            <Col xs={12}>
              <InputGroup className="news-input">
                <FormControl
                  placeholder="Email goes here"
                  className="news-form"
                  type="text"
                  value={data.email}
                  onChange={(e) =>
                    updateData({ ...data, email: e.target.value })
                  }
                />
                <InputGroup.Text className="news-form-button-link">
                  <Button className="news-button" onClick={handleButton}>
                    Submit
                  </Button>
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} className="copyright">
          <p>
            Copyright © <span>Burger King</span>, All Right Reserved. Designed
            By <span>Vaishakh K</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
