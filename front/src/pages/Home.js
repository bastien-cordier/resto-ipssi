import React from "react";
import { Container } from "react-bootstrap";
import "./Home.scss";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/assets/background.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <div className="homepage">
        <div className="homepage-content">
          <Container>
            <h1>Bienvenue chez Pizza de la mama de Napolita 🇮🇹</h1>
            <a href="/commander">
              <button className="btn-commande">Commander</button>
            </a>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
