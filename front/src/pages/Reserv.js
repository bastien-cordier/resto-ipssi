import React from "react";
import { Container } from "react-bootstrap";
import Card from "components/Cards/Card";
import "./Reserv.scss";


const Reserv = () => {
  return (
    <div>
      <img
        src="/assets/banner-reserv.png"
        alt="banner"
        className="img-bandeau"
        style={{ width:"100%" }}
      />
      <Container className="test">
        <h3> 🍽 Reservez votre table</h3>
      </Container>
      <Container className="pizzas">
        <Card />
        <Card />
        <Card />
      </Container>

    </div>
  );
};
export default Reserv;
