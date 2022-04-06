import React from "react";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import "./Card.scss";

function CardPlat(data) {
  const element = data.data;
  
  let description = 'Lorem ipsum dolor sit amet';
  if (element.description) {
    description = element.description.substring(0, 26);
  }

  function addToCart(element) {
    localStorage.setItem("plat", JSON.stringify(element));
    Swal.fire("", "Votre plat a bien été ajouté au panier", "success");
  }

  return (
    <div className="cardCommander">
      <div className="card">
        <img src="assets/pizza-card.jpeg" alt="Pizza" />
        <div className="content">
          <h4>{element.name}</h4>
          <h6>Description : {description}</h6>
          <h6>Prix : <strong>{element.price} €</strong></h6>
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

export default CardPlat;
