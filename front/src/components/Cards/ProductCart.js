import React from "react";

const ProductCart = (data) => {
  return (
    <div className="list">
      {data.datas.map((data) => (
        <div key={data.id}>
          <div className="card">
            <img src={data.image} alt="Boisson" />
            <div className="content">
              <h5>{data.name}</h5>
              <h6>
                Prix : <strong>{data.totalPrice} €</strong>
              </h6>
              <h6>Quantité: {data.quantity}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
