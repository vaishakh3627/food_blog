import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import Client1 from "../../../assets/img/testimonial-1.jpg";
import Client2 from "../../../assets/img/testimonial-2.jpg";
import Client3 from "../../../assets/img/testimonial-3.jpg";
import Client4 from "../../../assets/img/testimonial-4.jpg";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/bundle";

const member = [
  {
    clientImage: Client1,
  },
  {
    clientImage: Client2,
  },
  {
    clientImage: Client3,
  },
  {
    clientImage: Client4,
  },
];

const Client = () => {
  return (
    <Container fluid className="client-wrapper">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-5"
      >
        {member.map((item, key) => (
          <SwiperSlide key={key}>
            <Row>
              <Col xs={12}>
                <img src={item.clientImage} alt="" className="client-image" />
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                  Curabit facilis ornare velit non vulputa.
                </p>
                <h5>Client name</h5>
                <p>Profession</p>
              </Col>
            </Row>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
export default Client;
