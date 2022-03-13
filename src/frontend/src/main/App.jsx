import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import Footer from "../Components/Footer/Footer";
import Logo from "../Components/Logo/Logo";
import Main from "../Components/Main/Main";
import Navbar from "../Components/Navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Logo />
      <Navbar />
      <Main icon="icon" title="Inicio" subtitle="crud" />
      <Footer />
    </div>
  );
};

export default App;
