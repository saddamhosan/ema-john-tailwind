import React from 'react';


const Cart = ({ cart, clearCart, children }) => {
  let price = 0;
  let quantity = 0;
  let shipping = 0;

  cart.map((item) => {
    quantity += item.quantity;
    price += item.price * item.quantity;
    shipping += item.shipping;
  });

  const tax = parseFloat((price * 0.1).toFixed(2));
  const total = price + shipping + tax;
  return (
    <div className="ml-6 mt-14 sticky top-14 w-full">
      <h1 className="text-xl text-center font-semibold">Order Summary</h1>
      <p>Selected items:{quantity}</p>
      <p>Total Price:{price}</p>
      <p>Total shipping charge:{shipping}</p>
      <p>Tax:{tax}</p>
      <h1>Grand Total:{total}</h1>
      <button
        onClick={clearCart}
        className="bg-red-200 w-2/5 rounded-xl hover:bg-red-500 mt-4 mb-20"
      >
        Clear cart
      </button>
      {children}
    </div>
  );
};

export default Cart;