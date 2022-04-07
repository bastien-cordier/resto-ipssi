import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import CardPlat from "components/Cards/CardPlat";
import CardBoisson from "components/Cards/CardBoisson";
import CardTable from "components/Cards/CardTable";
import ProductCart from "../../components/Cards/ProductCart";

import "./Panier.scss";

export default class Panier extends Component {
  state = {
    hasFetchData: false,
    hasProduct: false,
  };

  totalPrice = 0;
  plats = [];
  boissons = [];
  tables = [];

  componentDidMount() {
    if (!localStorage.getItem("plats")) {
      localStorage.setItem("plats", JSON.stringify([]));
    }
    if (!localStorage.getItem("boissons")) {
      localStorage.setItem("boissons", JSON.stringify([]));
    }
    if (!localStorage.getItem("tables")) {
      localStorage.setItem("tables", JSON.stringify([]));
    }

    if (localStorage.getItem("plats") === "[]" && localStorage.getItem("boissons") === "[]") {
      this.setState({ hasFetchData: true });
    } else {
      this.plats = JSON.parse(localStorage.getItem("plats"));
      this.boissons = JSON.parse(localStorage.getItem("boissons"));
      this.tables = JSON.parse(localStorage.getItem("tables"));
      this.totalPrice = 0;

      this.plats.map(
        (plat) => (this.totalPrice = this.totalPrice + plat.totalPrice)
      );
      this.boissons.map(
        (boisson) => (this.totalPrice = this.totalPrice + boisson.totalPrice)
      );

      this.setState({ hasFetchData: true, hasProduct: true });
    }
  }

  clearLocalStorage() {
    localStorage.setItem("plats", JSON.stringify([]));
    localStorage.setItem("boissons", JSON.stringify([]));
    localStorage.setItem("tables", JSON.stringify([]));
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
              src="/assets/banner-panier.png"
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
              src="/assets/banner-panier.png"
              alt="banner"
              className="img-bandeau"
              style={{ width: "100%" }}
            />
            <Container style={{ marginBottom: "3em" }}>
              <h3>🛒 Votre panier</h3>
            </Container>
            <Container>
              {this.plats ? (
                <>
                  <h4>🍕 Vos Plats </h4>
                  <br />
                </>
              ) : (
                <></>
              )}
              <ProductCart datas={this.plats} />
              {this.plats ? (<><h4>🥤 Vos Boissons</h4><br/></>) : (<></>)}
              <ProductCart datas={this.boissons} />
              {this.plats ? (<><h4>Les tables</h4><br/></>) : (<></>)}
              <CardTable data={this.tables} />
            </Container>
            <h3 className="text-center">Prix total: {this.totalPrice} €</h3>
            <Row className="row-panier">
              <Col className="col-panier">
              
                <a href="/finish-reservation">
                  <button className="button-valider">
                    <FaCheck className="icone-panier"/> Valider votre panier
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
                  <BsFillTrashFill className="icone-panier"/>
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
