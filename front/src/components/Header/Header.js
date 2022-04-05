import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
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

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" sticky="top" variant="light">
        <Navbar.Brand href="/" className="logo-navbar">
          <img src="/assets/logo.png" alt="logo" style={{ height: "80px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/notre-restaurant">Notre Restaurant</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav href="/" className="logo-commander">
          <img
            src="/assets/commander.png"
            alt="logo"
            style={{ height: "80px" }}
          />
        </Nav>
      </Navbar>
    );
  }
}
