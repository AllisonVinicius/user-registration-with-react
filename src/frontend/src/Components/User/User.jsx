import { Component } from "react";
import Main from "../Main/Main";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de Usuarios: Incluir,Listar,ALterar,Excluir",
};

export default class User extends Component {
  render() {
    return <Main {...headerProps}>cadastro de usuário</Main>;
  }
}
