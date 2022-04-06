import React from "react";
import { FaCartPlus } from "react-icons/fa";
import "./Card.scss";

const Card = (data) => {
  const element = data.data;
  
  let description = 'Lorem ipsum dolor sit amet';
  if (element.description) {
    description = element.description.substring(0, 26);
  }

  return (
    <div className="cardCommander">
      <a href="#">
        <div className="card">
          <img src="assets/pizza-card.jpeg" alt="Pizza" />
          <div className="content">
            <h4>{element.name}</h4>
            <h6>Description : {description}</h6>
            <h6>Prix : <strong>{element.price} €</strong></h6>
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
