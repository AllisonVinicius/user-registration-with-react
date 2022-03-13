import React from "react";
import Main from "../Main/Main";

const Home = props => {
  return (
    <Main icon="home" title="Inicio" subtitle="Projetinho Cadastro Usuários">
      <div className="display-4">Bem Vindo!</div>
      <hr />
      <p className="mb-0">Cadastro Usuário</p>
    </Main>
  );
};

export default Home;
