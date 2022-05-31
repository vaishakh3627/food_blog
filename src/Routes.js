import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./container/Home";
import About from "./container/About";
import Feature from "./container/Feature";
import Chef from "./container/Chef";
import Menu from "./container/Menu";
import Booking from "./container/Booking";
import Contact from "./container/Contact";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="/chef" element={<Chef />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
export default ApplicationRoutes;
