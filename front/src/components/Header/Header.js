import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Token } from "api/BaseApi";
import "./Header.scss";

export default class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 90) {
      document.querySelector(".navbar").className =
        "navbar navbar-expand-lg navbar-light sticky-top scroll";
    } else {
      document.querySelector(".navbar").className =
        "navbar navbar-expand-lg navbar-light sticky-top ";
    }
  };

  logout() {
    if (Token) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  }

  render() {
    const renderAuthHeader = () => {
      if (Token) {
        return (
          <div style={{ display: "inherit" }}>
            <a href="/backoffice" className="logo-inscription">
              <img src="/assets/back-office.png" alt="logo" style={{ height: "80px" }} />
            </a>
            <a href="" onClick={this.logout} className="logo-connexion">
              <img src="/assets/deconnexion.png" alt="logo" style={{ height: "80px" }} />
            </a>
          </div>
        );
      } else {
        return (
          <div style={{ display: "inherit" }}>
            {/*<a href="/inscription" className="logo-inscription">*/}
            {/*  <img src="/assets/inscription.png" alt="logo" style={{ height: "80px" }} />*/}
            {/*</a>*/}
            <a href="/connexion" className="logo-connexion">
              <img src="/assets/connexion.png" alt="logo" style={{ height: "80px" }} />
            </a>
          </div>
        );
      }
    };

    return (
      <Navbar collapseOnSelect expand="lg" sticky="top" variant="light">
        <Navbar.Brand href="/" className="logo-navbar">
          <img src="/assets/logo.png" alt="logo" style={{ height: "140px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/notre-restaurant">Notre Restaurant</Nav.Link>
            <Nav.Link href="/commander" style={{ marginLeft: "0.6em" }}>
              Commander
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <a href="/panier" className="logo-commander">
          <img src="/assets/commander.png" alt="logo" style={{ height: "80px" }} />
        </a>
        {renderAuthHeader()}
      </Navbar>
    );
  }
}
