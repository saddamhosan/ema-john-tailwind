import React from 'react';


const Product = ({ product, addToCart }) => {
  const { name, price, img, seller } = product;
  return (
    <div className="relative">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="my-8">
        <h1>Name:{name}</h1>
        <p>Seller:{seller}</p>
        <p>Price:${price}</p>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="border w-full text-xl bg-orange-100 hover:bg-orange-500 absolute bottom-0 "
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;