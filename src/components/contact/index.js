import React from "react";

import "./contact.scss";

import Header from "../../common/Header";
import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";

const ContactPage = () => {
  return (
    <div className="contact-page-element-wrapper">
      <div className="contact-page-content-wrapper">
        <Header />
        <Banner />
      </div>
      <ContactUs />
    </div>
  );
};
export default ContactPage;
