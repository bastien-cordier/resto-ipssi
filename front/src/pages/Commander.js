import React from "react";
import { Container } from "react-bootstrap";
import Card from "components/Cards/Card";
import "./Commander.scss";

const Commander = () => {
  return (
    <div>
      <img
          src="/assets/banner-commande.png"
          alt="banner"
          className="img-bandeau"
        />
      <Container className="test"><h3>🇮🇹 Commandez votre pizza</h3></Container>

      <Container className="pizzas">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </div>
  );
};

export default Commander;
