import React, { Component, Fragment } from "react";
import { BiDrink } from "react-icons/bi";
import { GiTable, GiCardboardBox } from "react-icons/gi";
import { FaPizzaSlice, FaUserFriends } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { Token } from "api/BaseApi";
import "./Backoffice.scss";

export default class Backoffice extends Component {
  componentDidMount() {
    if (!Token) {
      window.location.href = "/connexion";
    }
  }

  render() {
    return (
      <Fragment>
        <Container className="backoffice">
          <h2>🛠 BackOffice</h2>
          <div className="text-center">
            <Row>
              <Col sm={6}>
                <a href="/backoffice/boisson-create">
                  <button className="btn-bo">
                    <BiDrink style={{ marginRight: "10px" }} />
                    Création d'une boisson
                  </button>
                </a>
              </Col>
              <Col sm={6}>
                <a href="/backoffice/boissons-list">
                  <button className="btn-bo">
                    <BiDrink style={{ marginRight: "10px" }} />
                    Gestion des boissons
                  </button>
                </a>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <a href="/backoffice/plat-create">
                  <button className="btn-bo">
                    <FaPizzaSlice style={{ marginRight: "10px" }} />
                    Création d'une pizza
                  </button>
                </a>
              </Col>
              <Col sm={6}>
                <a href="/backoffice/plats-list">
                  <button className="btn-bo">
                    <FaPizzaSlice style={{ marginRight: "10px" }} />
                    Gestion des pizzas
                  </button>
                </a>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <a href="/backoffice/table-create">
                  <button className="btn-bo">
                    <GiTable style={{ marginRight: "10px" }} />
                    Création d'une table
                  </button>
                </a>
              </Col>
              <Col sm={6}>
                <a href="/backoffice/tables-list">
                  <button className="btn-bo">
                    <GiTable style={{ marginRight: "10px" }} />
                    Gestion des tables
                  </button>
                </a>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <a href="/backoffice/reservations">
                  <button className="btn-bo">
                    <GiCardboardBox style={{ marginRight: "10px" }} />
                    Gestion des commandes
                  </button>
                </a>
              </Col>
              <Col sm={6}>
                <a href="/backoffice/users-list">
                  <button className="btn-bo">
                    <FaUserFriends style={{ marginRight: "10px" }} />
                    Gestion des utilisateurs
                  </button>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </Fragment>
    );
  }
}
