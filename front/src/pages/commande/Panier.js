import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import CardPlat from "components/Cards/CardPlat";
import CardBoisson from "components/Cards/CardBoisson";
import CardTable from "components/Cards/CardTable";
import "./Panier.scss";

export default class Panier extends Component {
  state = {
    hasFetchData: false,
    hasProduct: false,
  };

  plats = [];
  boissons = [];
  tables = [];

  componentDidMount() {
    if (
      localStorage.getItem("plats") === "[]" ||
      localStorage.getItem("boissons") === "[]"
    ) {
      this.setState({ hasFetchData: true });
    } else {
      this.plats = JSON.parse(localStorage.getItem("plats"));
      this.boissons = JSON.parse(localStorage.getItem("boissons"));
      this.tables = JSON.parse(localStorage.getItem("tables"));

      this.setState({ hasFetchData: true, hasProduct: true });
    }
  }

  clearLocalStorage() {
    localStorage.removeItem("plat");
    localStorage.removeItem("boisson");
    localStorage.removeItem("table");
    Swal.fire("", "Votre panier a été vidé", "success").then(() => {
      window.location.href = "/commander";
    });
  }

  render() {
    return (
      <div>
        {!this.state.hasFetchData ? (
          <div>Chargement…</div>
        ) : !this.state.hasProduct ? (
          <div>
            <img
              src="/assets/banner-reserv.png"
              alt="banner"
              className="img-bandeau"
              style={{ width: "100%" }}
            />
            <Container className="panier">
              <h3>🛒 Votre panier est vide</h3>
            </Container>
          </div>
        ) : (
          <div>
            <img
              src="/assets/banner-reserv.png"
              alt="banner"
              className="img-bandeau"
              style={{ width: "100%" }}
            />
            <Container style={{ marginBottom: "3em" }}>
              <h3>🛒 Votre panier</h3>
            </Container>
            <Container className="panier">
              <CardPlat data={this.plats} />
              <CardBoisson data={this.boissons} />
              <CardTable data={this.tables} />
            </Container>
            <Row className="row-panier">
              <Col className="col-panier">
                <a href="/finish-reservation">
                <button className="button-valider">
                    <FaCheck /> Valider votre panier
                  </button>
                  </a>
              </Col>

              <Col className="col-panier">
                {/*  ajouter un boutton payer */}
                {/*  ajouter le prix total */}
                
                <button
                  type="submit"
                  className="button-vider"
                  onClick={this.clearLocalStorage}
                >
                  <BsFillTrashFill />
                  Vider votre panier
                </button>
                
              </Col>
            </Row>
          </div>
        )}
      </div>
    );
  }
}
