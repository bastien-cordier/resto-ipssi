import React from "react";
import { Container } from "react-bootstrap";
import Card from "components/Cards/Card";
import "./Commander.scss";

const Commander = () => {
  return (
    <div>
      <h1>Commandez votre pizza</h1>
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
