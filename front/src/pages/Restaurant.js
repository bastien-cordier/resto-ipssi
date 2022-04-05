import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Restaurant.scss";

function Restaurant() {
  return (
    <Fragment>
      <div className="restaurant">
        <img src="/assets/interieur.png" alt="interieur" className="img-bandeau" />
        <Container>
          <Row>
            <Col sm={6}>
              <h1>NOTRE RESTAURANT</h1>
              <p>
                <span style={{ fontSize: "18px" }}>🧑🏼‍🍳</span> Au coeur du 3ème arrondissement de
                Paris, Pizza de la mama de napolita vous offre une expérience culinaire comme nulle
                part ailleurs. Vous y retrouverez une cuisine de qualité rassemblant toutes les
                saveurs délicieuses de l'Italie.
              </p>
              <p>
                <span style={{ fontSize: "18px" }}>🍕</span> Réalisées par nos chefs avec amour et
                des produits frais de qualité, venez tester nos best-sellers qui raviront vos
                papilles.
              </p>
              <p>
                <span style={{ fontSize: "18px" }}>👋🏼</span> Faites-vous livrer ou vivez
                l'expérience sur place ou à emporter. A bientôt chez Pizza de la mama de Napolita
              </p>
            </Col>
            <Col sm={1}></Col>
            <Col sm={5}>
              <img src="assets/about.jpeg" alt="Notre Restaurant" />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default Restaurant;
