import React from "react";
import { FaCartPlus } from "react-icons/fa";
import "./Card.scss";

function Card(data) {
  const element = data.data;

  let description = "Lorem ipsum dolor sit amet";
  if (element.description) {
    description = element.description.substring(0, 26);
  }

  function addToCart(element) {
    if (localStorage.getItem("panier")) {
      let listPanier = [];
      listPanier.push(JSON.parse(localStorage.getItem("panier")));
      listPanier.push(element);
      localStorage.setItem("panier", JSON.stringify(listPanier));
    } else {
      localStorage.setItem("panier", JSON.stringify(element));
    }
  }

  return (
    <div className="cardCommander">
      <a href="#">
        <div className="card">
          <img src={element.image} alt="Pizza" />
          <div className="content">
            <h4>{element.name}</h4>
            <h6>Description : {description}</h6>
            <h6>
              Prix : <strong>{element.price} €</strong>
            </h6>
            <div className="buttons">
              <button style={{ backgroundColor: "#67c23c", color: "#fff" }}>
                <FaCartPlus />
              </button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
