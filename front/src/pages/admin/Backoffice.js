import React, { Component, Fragment } from "react";
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
        <Container id="backoffice">
          <h2 className="title-page text-center">BackOffice</h2>
          <div className="text-center">
            <Row>
              <Col sm={6}>
                <a href="/backoffice/boisson-create">
                  <button>
                    <i className="fas fa-plus-circle icons" />
                    <span>Création d'une boisson</span>
                  </button>
                </a>
              </Col>
              <Col sm={6}>
                <a href="/backoffice/boissons-list">
                  <button>
                    <i className="fas fa-pen-to-square icons" />
                    <span>Gestion des boissons</span>
                  </button>
                </a>
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={6}>
                <a href="/backoffice/plat-create">
                  <button>
                    <i className="fas fa-plus-circle icons" />
                    <span>Création d'un plat</span>
                  </button>
                </a>
              </Col>
              <Col sm={6}>
                <a href="/backoffice/plats-list">
                  <button>
                    <i className="fas fa-pen-to-square icons" />
                    <span>Gestion des plats</span>
                  </button>
                </a>
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={6}>
                <a href="/backoffice/table-create">
                  <button>
                    <i className="fas fa-plus-circle icons" />
                    <span>Création d'une table</span>
                  </button>
                </a>
              </Col>
              <Col sm={6}>
                <a href="/backoffice/tables-list">
                  <button>
                    <i className="fas fa-pen-to-square icons" />
                    <span>Gestion des tables</span>
                  </button>
                </a>
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={6}>
                <a href="/backoffice/user-create">
                  <button>
                    <i className="fas fa-plus-circle icons" />
                    <span>Création d'un utilisateur</span>
                  </button>
                </a>
              </Col>
              <Col sm={6}>
                <a href="/backoffice/users-list">
                  <button>
                    <i className="fas fa-user-circle icons" />
                    <span>Gestion des utilisateurs</span>
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