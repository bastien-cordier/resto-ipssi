import React from "react";

const ProductCart = (data) => {
    return(
        <ol className="gradient-list">
            {data.datas.map(data => (
                <li key={data.id}>
                    <div>
                        <div>
                            {data.name}
                        </div>
                        <div>
                            Qty  : {data.quantity}
                        </div>
                        <div>
                            Prix : {data.totalPrice}
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    )
}

export default ProductCart;