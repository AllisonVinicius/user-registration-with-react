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

  componentWillWount() {
    axios(baseURL).then(resp => {
      this.setState({ list: resp.data });
    });
  }

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

  getUpdateList(user, add) {
    add = true;
    const list = this.state.list.filter(p => p.id !== user.id);
    if (user) list.unshift(user);

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

  load(user) {
    this.setState({ user });
  }

  remove(user) {
    axios.delete(`${baseURL}/${user.id}`).then(resp => {
      const list = this.getUpdateList(user, false);
      this.setState({ list });
    });
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-Mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{this.renderRow()}</tbody>
      </table>
    );
  }

  renderRow() {
    return this.state.list.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button
              className="btn btn-warning"
              onClick={e => this.load(e.user)}
            >
              <i className="fa fa-pincel"></i>
            </button>
            <button
              className="btn btn-danger ml-2"
              onClick={e => this.remove(e.user)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderRow()}
      </Main>
    );
  }
}
