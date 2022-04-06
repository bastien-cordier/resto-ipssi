import React, { Component, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { ApiRequests, Header, Token, ErrorTokenMessage, ErrorInfosMessage } from "api/BaseApi";
import Swal from "sweetalert2";

export default class BoCreateTable extends Component {
  state = {
    slot: "",
  };

  componentDidMount() {
    if (!Token) {
      window.location.href = "/connexion";
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const table = {
      slot: Number(this.state.slot),
    };

    Swal.fire({
      title: "Créer une table",
      text: "Êtes-vous sûr de vouloir créer cette table ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonColor: "#7db769",
      denyButtonColor: "#DC143C",
      confirmButtonText: "Créer",
      denyButtonText: "Ne pas créer",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(ApiRequests.fetchTables, table, { headers: Header })
          .then(() => {
            Swal.fire("", "Votre table a bien été enregistrée", "success").then(() => {
              window.location.reload(false);
            });
          })
          .catch((error) => {
            console.error(error.message);
            Swal.fire("", ErrorInfosMessage + ".<br/>" + ErrorTokenMessage, "error");
          });
      } else if (result.isDenied) {
        Swal.fire("", "Votre table n'a pas été créée", "error");
      }
    });
  };
  render() {
    return (
      <Fragment>
        <div className="cardBackoffice spaces-card">
          <form onSubmit={this.handleSubmit}>
            <h4>Création d'une table</h4>

            <label htmlFor="slot">Nombre de places de la table</label>
            <input
              type="number"
              id="slot"
              name="slot"
              min="1"
              placeholder="2"
              onChange={(e) => this.setState({ slot: e.target.value })}
              required
            />
            <Row>
              <Col sm={6}>
                <button type="submit" className="add">
                  Créer cette table
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
