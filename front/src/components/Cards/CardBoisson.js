import React from "react";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import "./Card.scss";

function CardBoisson(data) {
  const element = data.data;

  function addToCart(element) {
    let boissons = JSON.parse(localStorage.getItem("boissons"));
    const index = boissons.findIndex((plat) => plat.id.toString() === element.id.toString());
    if (index !== -1) {
      boissons[index].quantity = parseInt(boissons[index].quantity, 10) + 1;
      boissons[index].totalPrice =
        parseInt(boissons[index].quantity, 10) * parseInt(element.price, 10);
    } else {
      boissons.push({
        id: element.id,
        quantity: 1,
        image: element.image,
        totalPrice: element.price,
        name: element.name,
      });
    }
    localStorage.setItem("boissons", JSON.stringify(boissons));
    Swal.fire("", "Votre boisson a bien été ajoutée au panier", "success");
  }

  return (
    <div className="cardCommander">
      <div className="card">
        <img src={element.image} alt="Boisson" />
        <div className="content">
          <h4>{element.name}</h4>
          <h6>
            Prix : <strong>{element.price} €</strong>
          </h6>
          <div className="buttons">
            <button
              onClick={() => addToCart(element)}
              style={{ backgroundColor: "#67c23c", color: "#fff" }}
            >
              <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBoisson;
