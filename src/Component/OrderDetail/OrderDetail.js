import React from "react";

const OrderDetail = ({ item, deleteToCart }) => {
  return (
    <div className="flex border-2 m-2 p-2">
      <div className="w-[100px]">
        <img className="w-full" src={item.img} alt="" />
      </div>
      <div className="flex justify-between w-full m-2">
        <div>
          <h1>{item.name}</h1>
          <p>price:{item.price}</p>
          <p>Quantity:{item.quantity}</p>
        </div>
        <button onClick={() => deleteToCart(item)}>Delete</button>
      </div>
    </div>
  );
};

export default OrderDetail;
