import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import Member1 from "../../../assets/img/team-1.jpg";
import Member2 from "../../../assets/img/team-2.jpg";
import Member3 from "../../../assets/img/team-3.jpg";
import Member4 from "../../../assets/img/team-4.jpg";

import {
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Members = [
  {
    memberImage: Member1,
    memberName: "Adam Phillips",
    memberPosition: "CEO, Co Founder",
  },
  {
    memberImage: Member2,
    memberName: "Dylan Adams",
    memberPosition: "Master Chef",
  },
  {
    memberImage: Member3,
    memberName: "Jhon Doe",
    memberPosition: "Master Chef",
  },
  {
    memberImage: Member4,
    memberName: "Josh Dunn",
    memberPosition: "Master Chef",
  },
];

const Team = () => {
  return (
    <Container fluid className="team-wrapper">
      <Row>
        <Col xs={12} className="text-center">
          <h5>Our Team</h5>
        </Col>
        <Col xs={12} className="team-heading">
          <h1>Our Master Chef</h1>
        </Col>
        {Members.map((item, key) => (
          <Col
            lg={3}
            md={6}
            sm={12}
            key={key}
            className="team-member-column mb-5"
          >
            <div className="team-member">
              <div>
                <img
                  src={item.memberImage}
                  alt="member"
                  className="member-image"
                />
                <div className="social-media">
                  <a>
                    <AiOutlineInstagram
                      className="social-media-icon"
                      size={100}
                    />
                  </a>
                  <a>
                    <BsFacebook className="social-media-icon" size={100} />
                  </a>
                  <a>
                    <AiFillTwitterCircle
                      className="social-media-icon"
                      size={100}
                    />
                  </a>
                  <a>
                    <AiFillLinkedin className="social-media-icon" size={100} />
                  </a>
                </div>
              </div>
              <div className="text-center mt-3">
                <h4>{item.memberName}</h4>
              </div>
              <div className="text-center">
                <p>{item.memberPosition}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Team;
