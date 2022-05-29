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
  MdOutlineAccountCircle,
  MdOutlineMailOutline,
  MdAccessTimeFilled,
  MdSupervisorAccount,
} from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";

const BookTable = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    time: "",
    guest: "",
  });

  const updateData = (data) => {
    setData((previousSate) => ({
      ...previousSate,
      ...data,
    }));
  };

  const handleBook = () => {
    console.log(data);
    setData({ name: "", email: "", number: "", date: "", time: "", guest: "" });
  };

  return (
    <Container fluid className="book-table-wrapper">
      <Row>
        <Col lg={7} md={6} sm={12} className="book-table-content-wrapper">
          <Row>
            <Col xs={12}>
              <h5>Book A Table</h5>
            </Col>
            <Col xs={12}>
              <h1>Book Your Table For Private Dinners & Happy Hours</h1>
            </Col>
            <Col xs={12}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                viverra quis sem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                viverra quis sem. Curabitur non nisl nec nisi scelerisque
                maximus. Aenean consectetur convallis porttitor. Aliquam
                interdum at lacus non blandit.
              </p>
            </Col>
          </Row>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <div className="pt-5 pe-4 px-4 pb-3 book-table-form">
            <InputGroup className="input-group mb-3">
              <FormControl
                placeholder="Name"
                type="text"
                required="required"
                value={data.name}
                onChange={(e) => updateData({ ...data, name: e.target.value })}
                className="form-control"
              />
              <InputGroup.Text className="input-icon">
                <MdOutlineAccountCircle />
              </InputGroup.Text>
            </InputGroup>
            <InputGroup className="input-group mb-3">
              <FormControl
                placeholder="Email"
                type="email"
                required="required"
                value={data.email}
                onChange={(e) => updateData({ ...data, email: e.target.value })}
                className="form-control"
              />
              <InputGroup.Text className="input-icon">
                <MdOutlineMailOutline />
              </InputGroup.Text>
            </InputGroup>
            <InputGroup className="input-group mb-3">
              <FormControl
                placeholder="Mobile"
                type="text"
                required="required"
                value={data.number}
                onChange={(e) =>
                  updateData({ ...data, number: e.target.value })
                }
                className="form-control"
              />
              <InputGroup.Text className="input-icon">
                <FaMobile />
              </InputGroup.Text>
            </InputGroup>
            <InputGroup className="input-group mb-3">
              <FormControl
                placeholder="Date"
                type="text"
                required="required"
                value={data.date}
                onChange={(e) => updateData({ ...data, date: e.target.value })}
                className="form-control"
              />
              <InputGroup.Text className="input-icon">
                <BsCalendar2Date />
              </InputGroup.Text>
            </InputGroup>
            <InputGroup className="input-group mb-3">
              <FormControl
                placeholder="Time"
                type="text"
                required="required"
                value={data.time}
                onChange={(e) => updateData({ ...data, time: e.target.value })}
                className="form-control"
              />
              <InputGroup.Text className="input-icon">
                <MdAccessTimeFilled />
              </InputGroup.Text>
            </InputGroup>
            <InputGroup className="input-group mb-3">
              <FormControl
                placeholder="Number of Guest"
                type="text"
                required="required"
                value={data.guest}
                onChange={(e) => updateData({ ...data, guest: e.target.value })}
                className="form-control"
              />
              <InputGroup.Text className="input-icon">
                <MdSupervisorAccount />
              </InputGroup.Text>
            </InputGroup>
            <Button className="book-now-button mb-3" onClick={handleBook}>
              Book Now
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default BookTable;
