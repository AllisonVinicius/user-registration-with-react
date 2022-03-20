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

  getUpdateList(user) {
    const list = this.state.list.filter(p => p.id !== user.id);
    list.unshift(user);

    return list;
  }

  updateField(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.user.name}
                onChange={e => this.updateField(e)}
                placeholder="Digite o nome ..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.user.email}
                onChange={e => this.updateField(e)}
                placeholder="Digite o email"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={e => this.save(e)}>
              Salvar
            </button>
            <button className="btn btn-secondary" onClick={e => this.clear(e)}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <Main {...headerProps}>{this.renderForm()}</Main>;
  }
}
