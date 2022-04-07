import React from "react";

const TableCart = (data) => {
  return (
    <div className="list">
      {data.data.map((data) => (
        <div key={data.id}>
          <div className="card">
            <img src="assets/reserv-table.jpeg" alt="Boisson" />
            <div className="content">
              <h5>Hello</h5>
              <h6>Places: Hi</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableCart;
