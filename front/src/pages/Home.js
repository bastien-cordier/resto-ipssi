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
            <h1>Hello</h1>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
