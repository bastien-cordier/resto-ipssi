import React from "react";

const TableCart = (data) => {
  return (
    <div className="list">
      {data.data.map((data) => (
        <div key={data.id}>
          <div className="card">
            <img src="assets/reserv-table.jpeg" alt="Boisson" />
            <div className="content">
              <h5>Places : {data.slot}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableCart;
