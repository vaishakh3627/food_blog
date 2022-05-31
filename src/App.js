import React from "react";

import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";

import ApplicationRoutes from "./Routes";
import Footer from "./common/Footer";

function App() {
  return (
    <div className="App">
      <ApplicationRoutes />
      <Footer />
    </div>
  );
}

export default App;
