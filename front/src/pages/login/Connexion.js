import React, { Component, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { ApiRequests, ErrorInfosMessage } from "api/BaseApi";
import Swal from "sweetalert2";
import "./Log.scss";

export default class Connexion extends Component {
  state = {
    username: "",
    password: "",
  };

  onSubmit = (event) => {
    event.preventDefault();

    if (!this.state.username || !this.state.password) {
      Swal.fire("", "Veuillez renseigner tous les champs", "error");
    } else {
      axios
        .post(ApiRequests.fetchToken, this.state)
        .then((fetchToken) => {

          localStorage.setItem("user_id", fetchToken.data.user.id);

          Swal.fire("", "Connexion réussie", "success").then(() => {
            window.location.href = "/";
          });
        })
        .catch((error) => {
          console.error(error.message);
          Swal.fire("", ErrorInfosMessage, "error");
        });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="cardLog">
          <form onSubmit={this.onSubmit}>
            <Row>
              <Col>
                <h3>Connexion</h3>

                <label htmlFor="username">Votre nom d'utilisateur</label>
                <input type="username" placeholder="John" id="username" name="username" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />

                <label htmlFor="password">Votre mot de passe</label>
                <input type="password" placeholder="••••••••" id="password" name="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />

                <button type="submit">Se connecter</button>
              </Col>
            </Row>
          </form>
        </div>
      </Fragment>
    );
  }
}