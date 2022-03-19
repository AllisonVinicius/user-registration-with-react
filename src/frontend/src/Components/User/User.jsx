import axios from "axios";
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
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseURL}/${user.id}` : baseURL;

    axios[method](url, user).then(resp => {
      const list = this.getUpdateList(resp.data);
      this.setState({ user: initialState.user, list });
    });
  }

  render() {
    return <Main {...headerProps}>Cadastro de usuário</Main>;
  }
}
