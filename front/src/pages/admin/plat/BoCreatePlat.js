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
    image: "",
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
      image: this.state.image,
    };

    Swal.fire({
      title: "Créer un plat",
      text: "Êtes-vous sûr de vouloir créer cette pizza ?",
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
            Swal.fire("", "Votre pizza a bien été enregistrée", "success").then(() => {
              window.location.reload(false);
            });
          })
          .catch((error) => {
            console.error(error.message);
            Swal.fire("", ErrorInfosMessage + ".<br/>" + ErrorTokenMessage, "error");
          });
      } else if (result.isDenied) {
        Swal.fire("", "Votre pizza n'a pas été créée", "error");
      }
    });
  };
  render() {
    return (
      <Fragment>
        <div className="cardBackoffice spaces-card" style={{ paddingTop: "25px" }}>
          <form onSubmit={this.handleSubmit}>
            <h4>Création d'une pizza 🤌🏼</h4>

            <Row>
              <Col sm={6}>
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  placeholder="Regina"
                  id="name"
                  name="name"
                  onChange={(e) => this.setState({ name: e.target.value })}
                  required
                />
              </Col>
              <Col sm={6}>
                <label htmlFor="price">Prix de la pizza (en euros)</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  min="1"
                  placeholder="12 €"
                  onChange={(e) => this.setState({ price: e.target.value })}
                  required
                />
              </Col>
            </Row>

            <label htmlFor="description">Description de la pizza</label>
            <textarea
              id="description"
              name="description"
              placeholder="Lorem ipsum dolor sit amet"
              onChange={(e) => this.setState({ description: e.target.value })}
              required
            />

            <label htmlFor="price">Image de la pizza</label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="URL de l'image"
              onChange={(e) => this.setState({ image: e.target.value })}
              required
            />
            <Row>
              <Col sm={6}>
                <button type="submit" className="add">
                  Créer cette pizza
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
