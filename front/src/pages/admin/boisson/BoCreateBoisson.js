import React, { Component, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { ApiRequests, Header, Token, ErrorTokenMessage, ErrorInfosMessage } from "api/BaseApi";
import Swal from "sweetalert2";

export default class BoCreateBoisson extends Component {
  state = {
    name: "",
    price: "",
    image: "",
  };

  componentDidMount() {
    if (!Token) {
      window.location.href = "/connexion";
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const boisson = {
      name: this.state.name,
      price: Number(this.state.price),
      image: this.state.image,
    };

    Swal.fire({
      title: "Créer une boisson",
      text: "Êtes-vous sûr de vouloir créer cette boisson ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonColor: "#7db769",
      denyButtonColor: "#DC143C",
      confirmButtonText: "Créer",
      denyButtonText: "Ne pas créer",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(ApiRequests.fetchBoissons, boisson, { headers: Header })
          .then(() => {
            Swal.fire("", "Votre boisson a bien été enregistrée", "success").then(() => {
              window.location.reload(false);
            });
          })
          .catch((error) => {
            console.error(error.message);
            Swal.fire("", ErrorInfosMessage + ".<br/>" + ErrorTokenMessage, "error");
          });
      } else if (result.isDenied) {
        Swal.fire("", "Votre boisson n'a pas été créée", "error");
      }
    });
  };
  render() {
    return (
      <Fragment>
        <div className="cardBackoffice spaces-card">
          <form onSubmit={this.handleSubmit}>
            <h4>Création d'une boisson</h4>

            <label htmlFor="name">Nom de la boisson</label>
            <input
              type="text"
              placeholder="Bouteille d'eau"
              id="name"
              name="name"
              onChange={(e) => this.setState({ name: e.target.value })}
              required
            />
            <Row>
              <Col sm={6}>
                <label htmlFor="price">Prix de la boisson (en euros)</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  min="1"
                  placeholder="1 €"
                  onChange={(e) => this.setState({ price: e.target.value })}
                  required
                />
              </Col>
              <Col sm={6}>
                <label htmlFor="price">Image de la boisson</label>
                <input
                  type="text"
                  placeholder="URL de l'image"
                  id="image"
                  name="image"
                  onChange={(e) => this.setState({ image: e.target.value })}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <button type="submit" className="add">
                  Créer cette boisson
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
