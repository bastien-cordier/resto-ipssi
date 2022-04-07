import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { ApiRequests, ErrorTokenMessage } from "api/BaseApi";
import Swal from "sweetalert2";
import CardPlat from "components/Cards/CardPlat";
import CardBoisson from "components/Cards/CardBoisson";
import CardTable from "components/Cards/CardTable";
import "./Commander.scss";

export default class Commander extends Component {
  state = {
    plats: [],
    boissons: [],
    tables: [],
  };

  componentDidMount() {
      if (!localStorage.getItem("plats")){
          localStorage.setItem("plats", JSON.stringify([]));
      }
      if(!localStorage.getItem("boissons")){
          localStorage.setItem("boissons", JSON.stringify([]));
      }
      if (!localStorage.getItem("tables")) {
          localStorage.setItem("tables", JSON.stringify([]));
      }
    axios
      .get(ApiRequests.fetchPlats)
      .then((fetchPlats) => {
        const plats = fetchPlats.data;

        axios
          .get(ApiRequests.fetchBoissons)
          .then((fetchBoissons) => {
            const boissons = fetchBoissons.data;
            this.setState({ plats: plats, boissons: boissons });
          })
          .catch((error) => {
            console.error(error.message);
            Swal.fire("", ErrorTokenMessage, "error");
          });

        axios
          .get(ApiRequests.fetchTables)
          .then((fetchTables) => {
            const tables = fetchTables.data;
            this.setState({ tables });
          })
          .catch((error) => {
            console.error(error.message);
            Swal.fire("", ErrorTokenMessage, "error");
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
        <img src="/assets/banner-commande.png" alt="banner" className="img-bandeau" />
        <Container className="test">
          <h3>🍕 Commandez votre pizza</h3>
        </Container>
        <Container className="pizzas">
          {this.state.plats.map((plat) => (
            <CardPlat key={plat.id.toString()} data={plat} />
          ))}
        </Container>
        <Container className="test">
          <h3>🥤 Commandez votre boisson</h3>
        </Container>
        <Container className="boisson">
          {this.state.boissons.map((boisson) => (
            <CardBoisson key={boisson.id.toString()} data={boisson} />
          ))}
        </Container>
        <Container className="test">
          <h3>🍽 Réservez votre table</h3>
        </Container>
        <Container className="pizzas">
          {this.state.tables.map((table) => (
            <CardTable key={table.id.toString()} data={table} />
          ))}
        </Container>
      </div>
    );
  }
}
