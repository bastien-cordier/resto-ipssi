import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import "./Card.scss";

const Card = () => {
  return (
    <div className="cardCommander">
      <a href="#">
        <div className="card">
          <img src="assets/pizza-card.jpeg" alt="Pizza" />
          <div className="content">
            <h4>Pizza</h4>
            <h6>Description : Base tomate, jambon, fromage, champignon</h6>
            <div className="buttons">
              <button style={{ backgroundColor: "#67c23c", color: "#fff" }}>
                <FaCartPlus />
              </button>
              <button style={{ marginLeft: "1em" }}>
                <FiMoreHorizontal />
              </button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
