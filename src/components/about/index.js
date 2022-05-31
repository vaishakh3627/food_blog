import React from "react";

import "./about.scss";

import Header from "../../common/Header";
import Banner from "./components/Banner";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";

const AboutPage = () => {
  return (
    <div className="about-wrapper">
      <div className="about-content-wrapper">
        <Header />
        <Banner />
      </div>
      <Products />
      <AboutUs />
    </div>
  );
};
export default AboutPage;
