import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hook/useCart";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addedStorage, clearStorage } from "../Storage/Storage";

export const CartContext = createContext("cart");

const Shop = () => {
  // const [products] = useProduct();
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useCart();
  const [pageCount,setPageCount]=useState(0)
  const [page,setPage]=useState(0)
  const [size,setSize]=useState(12)

  useEffect(() => {
    fetch(`http://localhost:4000/products?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [page,size]);

  useEffect(()=>{
    fetch("http://localhost:4000/productsCount")
    .then(res=>res.json())
    .then(data=>{
      const count=data.count
      const page=Math.ceil(count/size)
      setPageCount(page)
    })
  },[size])

  const addToCart = (product) => {
    let newCart = [];
    const exists = cart.find((item) => item._id === product._id);
    const rest = cart.filter((item) => item._id !== product._id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      product.quantity += 1;
      newCart = [...rest, product];
    }
    setCart(newCart);
    addedStorage(product._id);
  };
  const clearCart = () => {
    setCart([]);
    clearStorage();
  };
  const navigate = useNavigate();

  return (
    <CartContext.Provider value={[cart, clearCart]}>
      <div>
        <div className="flex">
          <div className="grid grid-cols-3 gap-4 w-3/4 m-4">
            {products.map((product) => (
              <Product
                key={product._id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
          <div className="bg-zinc-200 w-1/4 ml-4">
            <Cart cart={cart} clearCart={clearCart}>
              <button
                onClick={() => navigate("/order")}
                className="bg-green-200 w-2/5 ml-2 rounded-xl hover:bg-green-500 mt-4 mb-20"
              >
                Review Order
              </button>
            </Cart>
          </div>
        </div>
        <div className="m-4">
          {[...Array(pageCount).keys()].map((num) => (
            <button
              key={num}
              className={
                page === num
                  ? "border px-3 py-1 mx-2 bg-orange-500 text-white"
                  : " border px-3 py-1 mx-2"
              }
              onClick={() => setPage(num)}
            >
              {num + 1}
            </button>
          ))}

          <select
            className="border border-orange-500 px-3 py-1 mx-2"
            onClick={(e) => setSize(e.target.value)}
          >
            <option value="6">6</option>
            <option value="12" defaultValue>
              12
            </option>
            <option value="15">15</option>
            <option value="21">21</option>
          </select>
        </div>
      </div>
    </CartContext.Provider>
  );
};

export default Shop;
