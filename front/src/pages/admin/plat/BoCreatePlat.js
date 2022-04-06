import React, { Component, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { ApiRequests, Header, Token, ErrorTokenMessage, ErrorInfosMessage } from "api/BaseApi";
import Swal from "sweetalert2";

export default class BoCreatePlat extends Component {
  state = {
    name: "",
    description: "",
    price: "",
  };

  componentDidMount() {
    if (!Token) {
      window.location.href = "/connexion";
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const plat = {
      name: this.state.name,
      description: this.state.description,
      price: Number(this.state.price),
    };

    Swal.fire({
      title: "Créer un plat",
      text: "Êtes-vous sûr de vouloir créer ce plat ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonColor: "#7db769",
      denyButtonColor: "#DC143C",
      confirmButtonText: "Créer",
      denyButtonText: "Ne pas créer",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(ApiRequests.fetchPlats, plat, { headers: Header })
          .then(() => {
            Swal.fire("", "Votre plat a bien été enregistré", "success").then(() => {
              window.location.reload(false);
            });
          })
          .catch((error) => {
            console.error(error.message);
            Swal.fire("", ErrorInfosMessage + ".<br/>" + ErrorTokenMessage, "error");
          });
      } else if (result.isDenied) {
        Swal.fire("", "Votre plat n'a pas été créé", "error");
      }
    });
  };
  render() {
    return (
      <Fragment>
        <div className="cardBackoffice spaces-card" style={{ paddingTop: "25px" }}>
          <form onSubmit={this.handleSubmit}>
            <h4>Création d'un plat</h4>

            <Row>
              <Col sm={6}>
                <label htmlFor="name">Nom du plat</label>
                <input type="text" placeholder="Bouteille d'eau" id="name" name="name" onChange={(e) => this.setState({ name: e.target.value })} required />
              </Col>
              <Col sm={6}>
                <label htmlFor="price">Prix du plat (en euros)</label>
                <input type="number" id="price" name="price" min="1" placeholder="1 €" onChange={(e) => this.setState({ price: e.target.value })} required />
              </Col>
            </Row>

            <label htmlFor="description">Description du plat</label>
            <textarea id="description" name="description" placeholder="Lorem ipsum dolor sit amet" onChange={(e) => this.setState({ description: e.target.value })} required />
            <Row>
              <Col sm={6}>
                <button type="submit" className="add">
                  Créer ce plat
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