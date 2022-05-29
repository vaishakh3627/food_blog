import { React, useState, useEffect, useRef } from "react";

import { Container, Nav, Navbar } from "react-bootstrap";

import "./style.scss";

const Header = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "rgb(245, 245, 245)" : "transparent",
      }}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand">
          Burger <span className="brand-part"> King</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              href="#deets"
              className="header-links"
              style={{ color: navBackground ? "" : "white" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#memes"
              className="header-links"
              style={{ color: navBackground ? "" : "white" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#memes"
              className="header-links"
              style={{ color: navBackground ? "" : "white" }}
            >
              Feature
            </Nav.Link>
            <Nav.Link
              href="#memes"
              className="header-links"
              style={{ color: navBackground ? "" : "white" }}
            >
              Chef
            </Nav.Link>
            <Nav.Link
              href="#memes"
              className="header-links"
              style={{ color: navBackground ? "" : "white" }}
            >
              Menu
            </Nav.Link>
            <Nav.Link
              href="#memes"
              className="header-links"
              style={{ color: navBackground ? "" : "white" }}
            >
              Booking
            </Nav.Link>
            <Nav.Link
              href="#memes"
              className="header-links"
              style={{ color: navBackground ? "" : "white" }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
