import React from "react";

import "./chef.scss";

import Header from "../../common/Header";
import Banner from "./components/Banner";
import Team from "./components/Team";

const ChefPage = () => {
  return (
    <div className="chef-wrapper">
      <div className="chef-content-wrapper mb-5">
        <Header />
        <Banner />
      </div>
      <Team />
    </div>
  );
};
export default ChefPage;
