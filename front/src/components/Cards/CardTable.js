import React from "react";
import { FaCartPlus } from "react-icons/fa";
import "./Card.scss";

function CardTable(data) {
  const element = data.data;

  function addToCart(element) {
    localStorage.setItem("table", JSON.stringify(element));
  }

  return (
    <div className="cardCommander">
      <div className="card">
        <img src="assets/pizza-card.jpeg" alt="Pizza" />
        <div className="content">
          <h4>Table N°{element.id}</h4>
          <h6>Nombre de places : <strong>{element.slot}</strong></h6>
          <div className="buttons">
            <button onClick={() => addToCart(element)} style={{ backgroundColor: "#67c23c", color: "#fff" }}>
              <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTable;
