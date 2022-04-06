import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Card from "components/Cards/Card";
import "./Reserv.scss";

export default class Reserv extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    console.log(localStorage.getItem("panier"));
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
        <Container className="test">
          <h3>🍽 Reservez votre table</h3>
        </Container>
        <Container className="pizzas">
          {this.state.orders.map((order) => (
            <Card key={order.id.toString()} data={order}/>
          ))}
        </Container>
      </div>
    );
  }
}
