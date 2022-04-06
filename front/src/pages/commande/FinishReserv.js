import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { ApiRequests, Header, ErrorTokenMessage } from "api/BaseApi";
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

  plat = [];
  boisson = [];
  table = [];

  componentDidMount() {
    if (!localStorage.getItem("plat") || !localStorage.getItem("boisson") || !localStorage.getItem("table")) {
      window.location.href = "/commander";
    } else {
      this.plat = JSON.parse(localStorage.getItem("plat"));
      this.boisson = JSON.parse(localStorage.getItem("boisson"));
      this.table = JSON.parse(localStorage.getItem("table"));

      this.setState({ hasFetchData: true });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date();

    const plat = {
      id: this.plat.id,
      quantity: 1
    }

    const boisson = {
      id: this.boisson.id,
      quantity: 1
    }

    const table = {
      id: this.table.id,
      quantity: this.table.slot
    }

    const reservation = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      tel: this.state.tel,
      boisson: [boisson],
      plat: [plat],
      table: [table],
      startDate: currentDate, 
      endDate: new Date(currentDate.setHours(currentDate.getHours() + 1)),
      nbPoeple: this.table.slot,
    };
    
    axios
      .post(ApiRequests.fetchReservations, reservation, { headers: Header })
      .then(() => {
        localStorage.removeItem("plat");
        localStorage.removeItem("boisson");
        localStorage.removeItem("table");

        Swal.fire("", "Votre réservation a bien été enregistrée", "success").then(() => {
          window.location.href = "/";
        });
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire("", ErrorTokenMessage, "error");
      });
  }

  render() {
    return (
      <div>
        {!this.state.hasFetchData ? (
          <div>Chargement…</div>
        ) : (
          <div>
            <Container className="reserb">
              <h3>🛒 Finaliser votre réservation</h3>

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
                      placeholder="0633551788"
                      id="tel"
                      name="tel"
                      onChange={(e) => this.setState({ tel: e.target.value })}
                      required
                    />
                  </Col>
                </Row>
                <button type="submit">
                  Valider
                </button>
              </form>
            </Container>
          </div>
        )}
      </div>
    );
  }
}
