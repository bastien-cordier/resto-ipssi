import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { ApiRequests, ErrorTokenMessage } from "api/BaseApi";
import Swal from "sweetalert2";
import Card from "components/Cards/Card";
import "./Commander.scss";

export default class Commander extends Component {
  state = {
    plats: [],
    boissons: [],
  };

  componentDidMount() {
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
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire("", ErrorTokenMessage, "error");
      });
  }

  render() {
    return (
      <div>
        <img src="/assets/banner-commande.png" alt="banner" className="img-bandeau"/>
        <Container className="test">
          <h3>🍕 Commandez votre pizza</h3>
        </Container>
        <Container className="pizzas">
          {this.state.plats.map((plat) => (
            <Card key={plat.id.toString()} data={plat}/>
          ))}
        </Container>
        <Container className="test">
          <h3>🥤 Commandez votre boisson</h3>
        </Container>
        <Container className="boisson">
          {this.state.boissons.map((boisson) => (
            <Card key={boisson.id.toString()} data={boisson}/>
          ))}
        </Container>
      </div>
    );  
  }
}