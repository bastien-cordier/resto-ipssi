import React from "react";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import "./Card.scss";

function CardTable(data) {
  const element = data.data;

  function addToCart(element) {
    let tables = JSON.parse(localStorage.getItem("tables"));
    tables.push({
      id: element.id,
      slot: element.slot,
    });
    localStorage.setItem("tables", JSON.stringify(tables));
    Swal.fire("", "Votre table a bien été réservée", "success");
  }

  return (
    <div className="cardCommander">
      <div className="card">
        <img src="assets/reserv-table.jpeg" alt="Table" />
        <div className="content">
          <h4>Table N°{element.id}</h4>
          <h6>
            Nombre de places : <strong>{element.slot}</strong>
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

export default CardTable;
