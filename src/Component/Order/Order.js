import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hook/useCart';
import Cart from '../Cart/Cart';
import OrderDetail from '../OrderDetail/OrderDetail';
import { clearStorage, removeStorage } from '../Storage/Storage';

const Order = () => {
    const [cart, setCart] = useCart();
    console.log(cart);
    const deleteToCart=(item)=>{
        const rest=cart.filter(singleItem=>singleItem._id!==item._id)
        if(rest){
            setCart([...rest])
        }
        removeStorage(item._id)
    }


    const clearCart=()=>{
        setCart([])
        clearStorage()
    }
    const navigate=useNavigate()
    return (
      <div className="flex">
        <div className="w-3/4">
          {cart.map((item) => (
            <OrderDetail item={item} deleteToCart={deleteToCart} />
          ))}
        </div>
        <div className="bg-zinc-200 w-1/4 ml-4">
          <Cart cart={cart} clearCart={clearCart}>
            <button
              onClick={() => navigate("/shipment")}
              className="bg-green-200 w-2/5 ml-2 rounded-xl hover:bg-green-500 mt-4 mb-20"
            >
              Shipment
            </button>
          </Cart>
        </div>
      </div>
    );
};

export default Order;