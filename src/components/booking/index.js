import React from "react";

import "./book.scss";

import Header from "../../common/Header";
import Banner from "./components/Banner";
import BookTable from "./components/BookTable";
import Menu from "./components/Menu";

const BookingPage = () => {
  return (
    <div className="booking-wrapper">
      <div className="booking-content-wrapper">
        <Header />
        <Banner />
      </div>
      <BookTable />
      <Menu />
    </div>
  );
};
export default BookingPage;
