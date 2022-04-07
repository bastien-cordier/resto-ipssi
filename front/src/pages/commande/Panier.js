import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import CardPlat from "components/Cards/CardPlat";
import CardBoisson from "components/Cards/CardBoisson";
import CardTable from "components/Cards/CardTable";

import "./Panier.scss";

export default class Panier extends Component {
  state = {
    hasFetchData: false,
    hasProduct: false
  };

  plats = [];
  boissons = [];
  tables = [];

  componentDidMount() {
    if (localStorage.getItem("plats") === "[]" || localStorage.getItem("boissons") === "[]") {
      this.setState({ hasFetchData: true });
    } else {
      this.plats = JSON.parse(localStorage.getItem("plats"));
      this.boissons = JSON.parse(localStorage.getItem("boissons"));
      this.tables = JSON.parse(localStorage.getItem("tables"));

      this.setState({ hasFetchData: true , hasProduct: true});
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
        ) : ( !this.state.hasProduct ? (
            <div>
              <img
                  src="/assets/banner-reserv.png"
                  alt="banner"
                  className="img-bandeau"
                  style={{ width:"100%" }}
              />
              <Container className="panier">
                <h3>🛒 Votre panier est vide</h3>
              </Container>
            </div>
         ):(
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
            <button type="submit" onClick={this.clearLocalStorage}>Vider votre panier</button>
            {/*  ajouter un boutton payer */}
            {/*  ajouter le prix total */}
          </div>
        ))}
      </div>
    );
  }
}
