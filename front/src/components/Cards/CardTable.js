import React from "react";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import "./Card.scss";

function CardTable(data) {
  const element = data.data;

  function addToCart(element) {
    localStorage.setItem("table", JSON.stringify(element));
    Swal.fire("", "Votre table a bien été réserver", "success");
  }

  return (
    <div className="cardCommander">
      <div className="card">
        <img src="assets/reserv-table.jpeg" alt="Table" />
        <div className="content">
          <h4>Table N°{element.id}</h4>
          <h6>Description : Lorem ipsum dolor sit amet</h6>
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
