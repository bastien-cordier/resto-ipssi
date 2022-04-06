import React, { Component, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { ApiRequests, Header, Token, ErrorTokenMessage, ErrorInfosMessage } from "api/BaseApi";
import Swal from "sweetalert2";
import "../Backoffice.scss";

export default class BoEditBoisson extends Component {
  state = {
    name: "",
    price: "",
    image: "",
    boisson: [],
    id: "",
    hasFetchData: false,
  };

  getBoissonById(id) {
    axios
      .get(`${ApiRequests.fetchBoissons}/${id}`)
      .then((fetchBoissons) => {
        const boisson = fetchBoissons.data;
        this.setState({
          boisson: boisson,
          name: boisson.name,
          price: boisson.price,
          image: boisson.image,
          id: boisson.id,
          hasFetchData: true,
        });
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire("", ErrorTokenMessage, "error");
      });
  }

  updateBoissonHandler = (e) => {
    e.preventDefault();

    axios
      .put(
        `${ApiRequests.fetchBoissons}/${this.state.id}`,
        { name: this.state.name, price: Number(this.state.price), image: this.state.image },
        { headers: Header }
      )
      .then(() => {
        Swal.fire("", "Votre boisson a bien été modifiée", "success").then(() => {
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
      this.getBoissonById(id);
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
                <form onSubmit={this.updateBoissonHandler}>
                  <h4>
                    Modifier la boisson <b>"{this.state.boisson.name}"</b>
                  </h4>
                  <label htmlFor="name">Nom de la boisson</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                    required
                  />

                  <label htmlFor="price">Prix de la boisson (en euros)</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={this.state.price}
                    min="1"
                    placeholder="1 €"
                    onChange={(e) => this.setState({ price: e.target.value })}
                    required
                  />

                  <label htmlFor="image">Image de la boisson</label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    value={this.state.image}
                    onChange={(e) => this.setState({ image: e.target.value })}
                    required
                  />

                  <Row>
                    <Col sm={6}>
                      <button type="submit" className="add">
                        Éditer cette boisson
                      </button>
                    </Col>
                    <Col sm={6}>
                      <Link to={"/backoffice/boissons-list"}>
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
