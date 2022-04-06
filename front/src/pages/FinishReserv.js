import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./FinishReserv.scss";

export default class FinishReserv extends Component {
  state = {
    plats: [],
  };

  componentDidMount() {
    if (!localStorage.getItem("panier") || !localStorage.getItem("table")) {
      window.location.href = "/commander";
    }
  }

  render() {
    return (
      <div>
        <Container className="panier">
          <h3>🛒 Finaliser votre réservation</h3>
        </Container>
      </div>
    );
  }
}
