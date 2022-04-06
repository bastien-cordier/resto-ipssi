import React, { Component, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { ApiRequests, Header, Token, ErrorTokenMessage, ErrorInfosMessage  } from "api/BaseApi";
import Swal from "sweetalert2";
import "../Backoffice.scss";

export default class BoEditPlat extends Component {
  state = {
    name: "",
    price: "",
    plat: [],
    id: "",
    hasFetchData: false,
  };

  getPlatById(id) {
    axios
      .get(`${ApiRequests.fetchPlats}/${id}`)
      .then((fetchPlats) => {
        const plat = fetchPlats.data;
        this.setState({ plat: plat, name: plat.name, description: plat.description, price: plat.price, id: plat.id, hasFetchData: true });
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire("", ErrorTokenMessage, "error");
      });
  }

  updatePlatHandler = (e) => {
    e.preventDefault();

    /* const newHeader = {
      Authorization: Token,
      "content-type": "application/merge-patch+json",
    }; */

    axios
      .put(`${ApiRequests.fetchPlats}/${this.state.id}`, { name: this.state.name, description: this.state.description, price: Number(this.state.price) }, { headers: Header })
      .then(() => {
        Swal.fire("", "Votre plat a bien été modifié", "success").then(() => {
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
      this.getPlatById(id);
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
                <form onSubmit={this.updatePlatHandler}>
                  <h4>
                    Modifier le plat <b>"{this.state.plat.name}"</b>
                  </h4>
                  <label htmlFor="name">Nom du plat</label>
                  <input type="text" id="name" name="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} required />

                  <label htmlFor="description">Description du plat</label>
                  <textarea id="description" name="description" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} required />

                  <label htmlFor="price">Prix du plat (en euros)</label>
                  <input type="number" id="price" name="price" value={this.state.price} min="1" placeholder="1 €" onChange={(e) => this.setState({ price: e.target.value })} required />
                  <Row>
                    <Col sm={6}>
                      <button type="submit" className="add">
                        Éditer ce plat
                      </button>
                    </Col>
                    <Col sm={6}>
                      <Link to={"/backoffice/plats-list"}>
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