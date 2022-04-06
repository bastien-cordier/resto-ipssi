import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Restaurant.scss";

function Restaurant() {
  return (
    <Fragment>
      <div className="restaurant">
        <img
          src="/assets/interieur.png"
          alt="interieur"
          className="img-bandeau"
        />
        <Container>
          <Row>
            <Col sm={6}>
              <h1>NOTRE RESTAURANT</h1>
              <p>
                <span style={{ fontSize: "18px" }}>🧑🏼‍🍳</span> Situé au coeur du
                3ème arrondissement de Paris, Pizza de la mama de napolita vous
                offre une expérience culinaire comme nulle part ailleurs. Vous y
                retrouverez une cuisine de qualité rassemblant toutes les
                saveurs délicieuses de l'Italie.
              </p>
              <p>
                <span style={{ fontSize: "18px" }}>🍕</span> Réalisées par nos
                chefs avec amour et des produits frais de qualité, venez tester
                nos best-sellers qui raviront vos papilles.
              </p>
              <p>
                <span style={{ fontSize: "18px" }}>👋🏼</span> Faites-vous livrer
                ou vivez l'expérience sur place ou à emporter. A bientôt chez
                Pizza de la mama de Napolita
              </p>
            </Col>
            <Col sm={1} />
            <Col sm={5}>
              <img
                data-aos="zoom-out-left"
                src="assets/about.jpeg"
                alt="Notre Restaurant"
              />
            </Col>
          </Row>
        </Container>
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <img
                data-aos="zoom-out-right"
                src="assets/histoire.jpeg"
                alt="Notre Histoire"
                style={{ width: "100%", height: "300px", marginTop: "6em" }}
              />
            </div>
            <Col sm={1}></Col>
            <Col sm={6}>
              <h1>NOTRE HISTOIRE</h1>
              <p>
                <span style={{ fontSize: "18px" }}>🇮🇹</span> Créé par le grand
                Giuseppe Gorgonzola-Ferrari,{" "}
                <strong>Pizza de la mama de Napolita</strong> est la première
                pizzeria a avoir ses portes au coeur de Paris en 1912. Ce lieu
                chargé d'histoire a vu passé les plus grands Hommes de ce monde
                comme Carlos, Materrazzi, Patrick Sébastien et Jean-Marie
                Bigard.
              </p>
              <p>
                <span style={{ fontSize: "18px" }}>🤌🏼</span> Giuseppe est une
                légende de la Pizza et reste à ce jour le plus jeune vainqueur
                du prix du meilleur Pizzaiolo de Meurthe-et-Moselle à l'âge de
                21 ans. Il est également connu pour son coup de boule sur
                Jean-Eudes Etchebest (grand père de Phillipe Etchebest) après
                que celui-ci ai voulu mettre des ananas sur sa pizza lors du
                festival de la Saucisse à Tourcoing.
              </p>
            </Col>
          </div>
        </div>
        <Container>
          <Row>
            <Col sm={6}>
              <h1>Où sommes nous ?</h1>
              <p>
                <span style={{ fontSize: "18px" }}>📍</span> 14 Rue de Bretagne,
                75003 Paris
              </p>
              <p>
                <span style={{ fontSize: "18px" }}>☎️ </span>06.34.54.32.50
              </p>
            </Col>
            <Col sm={1} />
            <Col sm={5}>
              <img
                data-aos="zoom-out-left"
                src="assets/map.png"
                alt="Notre Restaurant"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default Restaurant;
