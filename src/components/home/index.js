import React from "react";

import "./style.scss";

import Header from "../../common/Header";
import Banner from "./components/Banner";
import BookTable from "./components/BookTable";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Products from "./components/Products";
import Menu from "./components/Menu";
import Team from "./components/Team";
import Client from "./components/Client";
import ContactUs from "./components/ContactUs";

const HomePage = () => {
  return (
    <div className="home-wrapper">
      <div className="home-content-wrapper">
        <Header />
        <Banner />
      </div>
      <BookTable />
      <AboutUs />
      <Features />
      <Products />
      <Menu />
      <Team />
      <Client />
      <ContactUs />
    </div>
  );
};
export default HomePage;
