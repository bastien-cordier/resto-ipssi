import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CardPlat from "components/Cards/CardPlat";
import CardBoisson from "components/Cards/CardBoisson";
import CardTable from "components/Cards/CardTable";

import "./Panier.scss";

export default class Panier extends Component {
  state = {
    hasFetchData: false,
  };

  plats = [];
  boissons = [];
  tables = [];

  componentDidMount() {
    if (
      !localStorage.getItem("plat") ||
      !localStorage.getItem("boisson") ||
      !localStorage.getItem("table")
    ) {
      window.location.href = "/commander";
    } else {
      this.plats = JSON.parse(localStorage.getItem("plat"));
      this.boissons = JSON.parse(localStorage.getItem("boisson"));
      this.tables = JSON.parse(localStorage.getItem("table"));

      this.setState({ hasFetchData: true });
    }
  }

  render() {
    return (
      <div>
        {!this.state.hasFetchData ? (
          <div>Chargement…</div>
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
          </div>
        )}
      </div>
    );
  }
}
