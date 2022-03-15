import { Component } from "react";
import Main from "../Main/Main";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de Usuarios: Incluir,Listar,ALterar,Excluir",
};

const baseURL = "http://localhost:3001/users";

const initialState = {
  user: { name: "", email: "" },
  list: [],
};

export default class User extends Component {
  state = { ...initialState };

  clear() {
    this.setState({ user: initialState.user });
  }

  save() {
    const user = this.state.user;
    const method = user.id;
  }

  render() {
    return <Main {...headerProps}>cadastro de usuário</Main>;
  }
}
