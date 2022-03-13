import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import Logo from "../Components/Logo/Logo";
import Navbar from "../Components/Navbar/Navbar";
import "./App.css";

const App = props => {
  return (
    <div className="app">
      <Logo />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
