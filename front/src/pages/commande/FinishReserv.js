import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { ApiRequests, Header, ErrorTokenMessage, ErrorInfosMessage } from "api/BaseApi";
import Swal from "sweetalert2";
import "./FinishReserv.scss";

export default class FinishReserv extends Component {
  state = {
    hasFetchData: false,
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
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
      window.location.href = "/commander";
    } else {
      this.plats = JSON.parse(localStorage.getItem("plats"));
      this.boissons = JSON.parse(localStorage.getItem("boissons"));
      this.tables = JSON.parse(localStorage.getItem("tables"));
      this.totalPrice = 0;

      this.plats.map((plat) => (this.totalPrice = this.totalPrice + plat.totalPrice));
      this.boissons.map((boisson) => (this.totalPrice = this.totalPrice + boisson.totalPrice));

      this.setState({ hasFetchData: true });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date();

    const reservation = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      tel: this.state.tel,
      boissons: this.boissons,
      plats: this.plats,
      tables: this.tables,
    };
    if (this.tables.length !== 0) {
      reservation.startDate = currentDate;
      reservation.endDate = new Date(currentDate.setHours(currentDate.getHours() + 1));

      reservation.nbPoeple = 0;
      this.tables.map((table) => (reservation.nbPoeple = reservation.nbPoeple + table.slot));
    }

    Swal.fire({
      title: "Validation de la réservation",
      text: "Êtes-vous sûr de vouloir valider cette réservation ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonColor: "#7db769",
      denyButtonColor: "#DC143C",
      confirmButtonText: "Créer",
      denyButtonText: "Ne pas créer",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(ApiRequests.fetchReservations, reservation, { headers: Header })
          .then(() => {
            localStorage.removeItem("plats");
            localStorage.removeItem("boissons");
            localStorage.removeItem("tables");

            Swal.fire("", "Votre réservation a bien été enregistrée", "success").then(() => {
              window.location.href = "/";
            });
          })
          .catch((error) => {
            console.error(error.message);
            Swal.fire("", ErrorInfosMessage + ".<br/>" + ErrorTokenMessage, "error");
          });
      } else if (result.isDenied) {
        Swal.fire("", "Votre réservation n'a pas été enregistrée", "error");
      }
    });
  };

  render() {
    return (
      <div className="finishReserv">
        {!this.state.hasFetchData ? (
          <div>Chargement…</div>
        ) : (
          <div>
            <Container className="reserb">
              <h3 className="mb-5 text-center">🛒 Finaliser votre réservation</h3>
              <Container style={{ marginBottom: "3em" }}>
                <h3>Prix total: {this.totalPrice} €</h3>
              </Container>

              <form onSubmit={this.handleSubmit}>
                <Row>
                  <Col sm={6}>
                    <label htmlFor="firstName">Prénom</label>
                    <input
                      type="text"
                      placeholder="John"
                      id="firstName"
                      name="firstName"
                      onChange={(e) => this.setState({ firstName: e.target.value })}
                      required
                    />
                  </Col>
                  <Col sm={6}>
                    <label htmlFor="lastName">Nom</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      id="lastName"
                      name="lastName"
                      onChange={(e) => this.setState({ lastName: e.target.value })}
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <label htmlFor="email">Mail</label>
                    <input
                      type="text"
                      placeholder="john.doe@gmail.com"
                      id="email"
                      name="email"
                      onChange={(e) => this.setState({ email: e.target.value })}
                      required
                    />
                  </Col>
                  <Col sm={6}>
                    <label htmlFor="tel">Téléphone</label>
                    <input
                      type="text"
                      placeholder="06 33 55 17 88"
                      id="tel"
                      name="tel"
                      onChange={(e) => this.setState({ tel: e.target.value })}
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={8}>
                    <label htmlFor="card">Credit Card</label>
                    <input
                      type="text"
                      placeholder="4242 4242 4242 4242"
                      id="card"
                      name="card"
                      required
                    />
                  </Col>
                  <Col sm={2}>
                    <label htmlFor="CVV">CVV</label>
                    <input type="text" placeholder="007" id="cvv" name="cvv" required />
                  </Col>
                  <Col sm={2}>
                    <label htmlFor="Date">Date</label>
                    <input type="text" placeholder="12/2024" id="date" name="date" required />
                  </Col>
                </Row>
                <button type="submit">Valider</button>
              </form>
            </Container>
          </div>
        )}
      </div>
    );
  }
}
