import React from "react";

import Header from "../../common/Header";
import Banner from "./components/Banner";
import Features from "./components/Features";

import "./feature.scss";

const FeaturePage = () => {
  return (
    <div className="feature-layout-wrapper">
      <div className="feature-header-wrapper">
        <Header />
        <Banner />
      </div>
      <Features />
    </div>
  );
};
export default FeaturePage;
