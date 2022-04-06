import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./Panier.scss";

export default class Panier extends Component {
  state = {
    plats: [],
    boissons: [],
    tables: [],
  };

  componentDidMount() {
    if (!localStorage.getItem("plat") || !localStorage.getItem("boisson") || !localStorage.getItem("table")) {
      window.location.href = "/commander";
    } else {
      const plats = JSON.parse(localStorage.getItem("plat"));
      const boissons = JSON.parse(localStorage.getItem("boisson"));
      const tables = JSON.parse(localStorage.getItem("table"));
      // @TODO faire un localsotrage pour les boissons et plat séparé dans 2 tableaux différents 
      // et afficher un sweetalert success après avoir sélectionner une carte maius ne pas faire de redirection
      this.setState({
        plats: plats,
        boissons: boissons,
        tables: tables,
      });
      console.log(11, this.state);
    }
  }

  render() {
    return (
      <div>
        <img
          src="/assets/banner-reserv.png"
          alt="banner"
          className="img-bandeau"
          style={{ width:"100%" }}
        />
        <Container className="panier">
          <h3>🛒 Votre panier</h3>
        </Container>
        <Container className="panier">
          {/* {this.state.tables.map((table) => (
            <CardTable key={table.id.toString()} data={table}/>
          ))} */}
        </Container>
      </div>
    );
  }
}

