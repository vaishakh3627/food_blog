import React from "react";

import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./components/home";
import Footer from "./common/Footer";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
