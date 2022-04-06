import React, { Component, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { ApiRequests, Header, Token, ErrorTokenMessage, ErrorInfosMessage } from "api/BaseApi";
import Swal from "sweetalert2";
import "../Backoffice.scss";

export default class BoEditUser extends Component {
  state = {
    username: "",
    password: "",
    user: [],
    id: "",
    hasFetchData: false,
  };

  getUserById(id) {
    axios
      .get(`${ApiRequests.fetchUsers}/${id}`, { headers: Header })
      .then((fetchUsers) => {
        const user = fetchUsers.data;
        this.setState({ user: user, username: user.username, password: user.password, id: user.id, hasFetchData: true });
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire("", ErrorTokenMessage, "error");
      });
  }

  updateUserHandler = (e) => {
    e.preventDefault();

    axios
      .put(`${ApiRequests.fetchUsers}/${this.state.id}`, { username: this.state.username, password: this.state.password }, { headers: Header })
      .then(() => {
        Swal.fire("", "Votre utilisateur a bien été modifié", "success").then(() => {
          window.location.reload(false);
        });
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire("", ErrorInfosMessage + ".<br/>" + ErrorTokenMessage, "error");
      });
  };

  componentDidMount() {
    if (!Token) {
      window.location.href = "/connexion";
    } else {
      const id = Number(window.location.pathname.slice(-1));
      this.getUserById(id);
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          {!this.state.hasFetchData ? (
            <div>Chargement…</div>
          ) : (
            <Fragment>
              <div className="cardBackoffice spaces-card">
                <form onSubmit={this.updateUserHandler}>
                  <h4>
                    Modifier l'utilisateur <b>"{this.state.user.username}"</b>
                  </h4>
                  <label htmlFor="username">Nom d'utilisateur</label>
                  <input type="text" id="username" name="username" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} required />

                  <label htmlFor="password">Mot de passe</label>
                  <input type="text" id="password" name="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} required />
                  <Row>
                    <Col sm={6}>
                      <button type="submit" className="add">
                        Éditer cet utilisateur
                      </button>
                    </Col>
                    <Col sm={6}>
                      <Link to={"/backoffice/users-list"}>
                        <button className="backBo">Retour à la liste</button>
                      </Link>
                    </Col>
                  </Row>
                </form>
              </div>
            </Fragment>
          )}
        </div>
      </Fragment>
    );
  }
}