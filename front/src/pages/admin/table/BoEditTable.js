import React, { Component, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { ApiRequests, Header, Token, ErrorTokenMessage, ErrorInfosMessage } from "api/BaseApi";
import Swal from "sweetalert2";
import "../Backoffice.scss";

export default class BoEditTable extends Component {
  state = {
    slot: "",
    table: [],
    id: "",
    hasFetchData: false,
  };

  getTableById(id) {
    axios
      .get(`${ApiRequests.fetchTables}/${id}`)
      .then((fetchTables) => {
        const table = fetchTables.data;
        this.setState({ table: table, slot: table.slot, id: table.id, hasFetchData: true });
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire("", ErrorTokenMessage, "error");
      });
  }

  updateTableHandler = (e) => {
    e.preventDefault();

    axios
      .put(
        `${ApiRequests.fetchTables}/${this.state.id}`,
        { slot: Number(this.state.slot) },
        { headers: Header }
      )
      .then(() => {
        Swal.fire("", "Votre table a bien été modifiée", "success").then(() => {
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
      this.getTableById(id);
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
                <form onSubmit={this.updateTableHandler}>
                  <h4>
                    Modifier la table <b>"{this.state.table.id}"</b>
                  </h4>
                  <label htmlFor="slot">Nombre de places de la table</label>
                  <input
                    type="number"
                    id="slot"
                    name="slot"
                    value={this.state.slot}
                    min="1"
                    placeholder="2"
                    onChange={(e) => this.setState({ slot: e.target.value })}
                    required
                  />
                  <Row>
                    <Col sm={6}>
                      <button type="submit" className="add">
                        Éditer cette table
                      </button>
                    </Col>
                    <Col sm={6}>
                      <Link to={"/backoffice/tables-list"}>
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
