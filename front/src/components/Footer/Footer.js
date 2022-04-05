import React, { Component, Fragment } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="footer-container sticky-bottom" id="footer">
          <nav className="footer">
            <p>Pizza de la mama de Napolita - Paris. {new Date().getFullYear()} - Tous droits réservés</p>
          </nav>
        </footer>
      </Fragment>
    );
  }
}