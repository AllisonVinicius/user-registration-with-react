import React from "react";
import Header from "../Header/Header";
import "./Main.css";

const Main = props => {
  return (
    <>
      <Header {...props} />
      <main className="content container-fluid"></main>
    </>
  );
};

export default Main;
