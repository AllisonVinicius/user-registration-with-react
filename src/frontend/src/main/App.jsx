import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Logo from "../Components/Logo/Logo";
import Navbar from "../Components/Navbar/Navbar";
import "./App.css";
import Routes from "./Routes/Routes";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
