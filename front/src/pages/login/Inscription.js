import React, { Component, Fragment } from "react";
import axios from "axios";
import { ApiRequests, Header, ErrorInfosMessage } from "api/BaseApi";
import Swal from "sweetalert2";
import "./Log.scss";

export default class Inscription extends Component {
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
        .post(ApiRequests.fetchUsers, this.state, { headers: Header })
        .then(() => {
          Swal.fire("", "Inscription réussi", "success").then(() => {
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
        <div className="loginPage">
          <div class="left-content">
            <h3>🇮🇹 Inscription</h3>
            <form onSubmit={this.onSubmit}>
              <label htmlFor="username">Nom d'utilisateur</label>
              <br />
              <input
                type="text"
                placeholder="John"
                id="username"
                name="username"
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
              />
              <br />
              <label htmlFor="password" style={{ paddingTop: "2em" }}>
                Mot de passe
              </label>
              <br />
              <input
                type="password"
                placeholder="••••••••"
                id="password"
                name="password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <br />
              <button type="submit">S'inscrire</button>
            </form>
          </div>
          <div
            class="right-content"
            style={{
              backgroundImage: `url(/assets/inscription-banner.jpeg)`,
              backgroundSize: "cover",
            }}
          />
        </div>
      </Fragment>
    );
  }
}
