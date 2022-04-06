import React, { Component, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { ApiRequests, Header, Token, ErrorTokenMessage, ErrorInfosMessage } from "api/BaseApi";
import Swal from "sweetalert2";

export default class BoCreateUser extends Component {
  state = {
    username: "",
    password: "",
  };

  componentDidMount() {
    if (!Token) {
      window.location.href = "/connexion";
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    Swal.fire({
      title: "Créer un utilisateur",
      text: "Êtes-vous sûr de vouloir créer cet utilisateur ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonColor: "#7db769",
      denyButtonColor: "#DC143C",
      confirmButtonText: "Créer",
      denyButtonText: "Ne pas créer",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(ApiRequests.fetchUsers, user, { headers: Header })
          .then(() => {
            Swal.fire("", "Votre utilisateur a bien été enregistré", "success").then(() => {
              window.location.reload(false);
            });
          })
          .catch((error) => {
            console.error(error.message);
            Swal.fire("", ErrorInfosMessage + ".<br/>" + ErrorTokenMessage, "error");
          });
      } else if (result.isDenied) {
        Swal.fire("", "Votre utilisateur n'a pas été créé", "error");
      }
    });
  };
  render() {
    return (
      <Fragment>
        <div className="cardBackoffice spaces-card">
          <form onSubmit={this.handleSubmit}>
            <h4>Création d'un utilisateur</h4>

            <label htmlFor="username">Nom d'utilisateur</label>
            <input type="text" placeholder="John" id="username" name="username" onChange={(e) => this.setState({ username: e.target.value })} required />

            <label htmlFor="password">Mot de passe</label>
            <input type="password" placeholder="••••••••" id="password" name="password" onChange={(e) => this.setState({ password: e.target.value })} required />
            <Row>
              <Col sm={6}>
                <button type="submit" className="add">
                  Créer cet utilisateur
                </button>
              </Col>
              <Col sm={6}>
                <Link to={"/backoffice"}>
                  <button className="backBo">Retour au Backoffice</button>
                </Link>
              </Col>
            </Row>
          </form>
        </div>
      </Fragment>
    );
  }
}