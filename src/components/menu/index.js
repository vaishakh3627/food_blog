import React from "react";

import "./menu.scss";

import Header from "../../common/Header";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Menu from "./components/Menu";

const MenuPage = () => {
  return (
    <div className="menu-page-wrapper">
      <div className="menu-page-content-wrapper">
        <Header />
        <Banner />
      </div>
      <Products />
      <Menu />
    </div>
  );
};
export default MenuPage;
