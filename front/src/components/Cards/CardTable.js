import React from "react";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import "./Card.scss";

function CardTable(data) {
  const element = data.data;

  function addToCart(element) {
    let tables = JSON.parse(localStorage.getItem("tables"));
    const index = tables.findIndex(plat => plat.id.toString() === element.id.toString());
    if(index !== -1){
      tables[index].quantity = parseInt(tables[index].quantity, 10) + 1;
      tables[index].totalPrice = parseInt(tables[index].quantity, 10) * parseInt(element.price, 10);
    } else {
      tables.push({id: element.id, quantity: 1, image: element.image, totalPrice: element.price, name: element.name});
    }
    Swal.fire("", "Votre table a bien été réserver", "success");
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
