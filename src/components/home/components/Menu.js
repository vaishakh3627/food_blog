import { React, useState } from "react";

import { Button, Col, Container, Row } from "react-bootstrap";

import Burger from "../../../assets/img/menu-burger-img.jpg";
import Snack from "../../../assets/img/menu-snack-img.jpg";
import Beverage from "../../../assets/img/menu-beverage-img.jpg";

import { BURGER, SNACK, BEVERAGE } from "../constants";

const BurgerMenu = [
  {
    productName: "Mini cheese Burger",
    productPrice: "$9.00",
  },
  {
    productName: "Double size burger",
    productPrice: "$11.00",
  },
  {
    productName: "Bacon, EGG and Cheese",
    productPrice: "$13.00",
  },
  {
    productName: "Pulled porx Burger",
    productPrice: "$18.00",
  },
  {
    productName: "Fried chicken Burger",
    productPrice: "$22.00",
  },
];

const SnackMenu = [
  {
    productName: "Corn Tikki - Spicy fried Aloo",
    productPrice: "$15.00",
  },
  {
    productName: "Bread besan Toast",
    productPrice: "$35.00",
  },
  {
    productName: "Healthy soya nugget snacks",
    productPrice: "$20.00",
  },
  {
    productName: "Tandoori Soya Chunks",
    productPrice: "$30.00",
  },
  {
    productName: "Tandoori Soya nugget snacks",
    productPrice: "$25.00",
  },
];

const BeverageMenu = [
  {
    productName: "Single Cup Brew",
    productPrice: "$7.00",
  },
  {
    productName: "Caffe Americano",
    productPrice: "$9.00",
  },
  {
    productName: "Caramel Macchiato",
    productPrice: "$15.00",
  },
  {
    productName: "Standard black coffee",
    productPrice: "$8.00",
  },
  {
    productName: "Standard black coffee",
    productPrice: "$12.00",
  },
];

const BurgerPage = () => (
  <Row>
    <Col lg={7} md={7} sm={12}>
      {BurgerMenu.map((item, key) => (
        <Row key={key} className="mb-3">
          <Col lg={2} md={2} sm={2} className="p-2 menu-image-wrapper">
            <div className="menu-burger-image"></div>
          </Col>
          <Col lg={8} md={8} sm={8} className="menu-name">
            <h5>{item.productName}</h5>
            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
          </Col>
          <Col lg={2} md={2} sm={2} className="item-price">
            <h5>{item.productPrice}</h5>
          </Col>
        </Row>
      ))}
    </Col>
    <Col xs={5} className="item-big-image">
      <img src={Burger} alt="burger" className="item-image" />
    </Col>
  </Row>
);

const SnackPage = () => (
  <Row>
    <Col lg={7} md={7} sm={12}>
      {SnackMenu.map((item, key) => (
        <Row key={key} className="mb-3">
          <Col lg={2} md={2} sm={2} className="p-2 menu-image-wrapper">
            <div className="menu-snack-image"></div>
          </Col>
          <Col lg={8} md={8} sm={8} className="menu-name">
            <h5>{item.productName}</h5>
            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
          </Col>
          <Col lg={2} md={2} sm={2} className="item-price">
            <h5>{item.productPrice}</h5>
          </Col>
        </Row>
      ))}
    </Col>
    <Col xs={5} className="item-big-image">
      <img src={Snack} alt="burger" className="item-image" />
    </Col>
  </Row>
);

const BeveragePage = () => (
  <Row>
    <Col lg={7} md={7} sm={12}>
      {BeverageMenu.map((item, key) => (
        <Row key={key} className="mb-3">
          <Col lg={2} md={2} sm={2} className="p-2 menu-image-wrapper">
            <div className="menu-beverage-image"></div>
          </Col>
          <Col lg={8} md={8} sm={8} className="menu-name">
            <h5>{item.productName}</h5>
            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
          </Col>
          <Col lg={2} md={2} sm={2} className="item-price">
            <h5>{item.productPrice}</h5>
          </Col>
        </Row>
      ))}
    </Col>
    <Col xs={5} className="item-big-image">
      <img src={Beverage} alt="burger" className="item-image" />
    </Col>
  </Row>
);

const renderComponent = {
  [BURGER]: <BurgerPage />,
  [SNACK]: <SnackPage />,
  [BEVERAGE]: <BeveragePage />,
};

const Menu = () => {
  const [component, setComponent] = useState(BURGER);

  const [active, setActive] = useState("1");

  const handleBurger = (e) => {
    setComponent(BURGER);
    setActive(e.target.id);
  };

  const handleSnack = (e) => {
    setComponent(SNACK);
    setActive(e.target.id);
  };

  const handleBeverage = (e) => {
    setComponent(BEVERAGE);
    setActive(e.target.id);
  };

  return (
    <Container fluid className="menu-wrapper mb-5">
      <Row>
        <Col xs={12} className="text-center mt-2">
          <h5>Food Menu</h5>
        </Col>
        <Col xs={12} className="food-menu-heading">
          <h1>Delicious Food Menu</h1>
        </Col>
        <Col xs={12} className="text-center mt-5">
          <Button
            key={1}
            className={active === "1" ? "active me-2" : "me-2 menu-button"}
            id={"1"}
            onClick={handleBurger}
          >
            Burgers
          </Button>
          <Button
            key={2}
            className={active === "2" ? "active me-2" : "me-2 menu-button"}
            id={"2"}
            onClick={handleSnack}
          >
            Snacks
          </Button>
          <Button
            key={3}
            className={active === "3" ? "active me-2" : "me-2 menu-button"}
            id={"3"}
            onClick={handleBeverage}
          >
            Beverages
          </Button>
        </Col>
        <Col xs={12} className="mt-4 item">
          {renderComponent[component]}
        </Col>
      </Row>
    </Container>
  );
};
export default Menu;
