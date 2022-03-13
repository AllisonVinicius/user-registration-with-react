import React from "react";
import logo from "../../assets/img/man.svg";
import "./Logo.css";

const Logo = () => {
  return (
    <aside className="logo">
      <a href="/" className="logo"></a>
      <img src={logo} alt="logo" />
    </aside>
  );
};

export default Logo;
