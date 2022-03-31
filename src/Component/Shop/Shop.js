import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hook/useCart';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addedStorage, clearStorage } from "../Storage/Storage";
import useProduct from './../../hook/useProduct';

const Shop = () => {
    const [products] = useProduct();
    const [cart,setCart]=useCart(products)
    
    const addToCart = (product) => {
        let newCart=[]
        const exists=cart.find(item=>item.id===product.id)
        const rest=cart.filter(item=>item.id!==product.id)
        if(!exists){
            product.quantity=1
            newCart = [...cart, product];
        }else{
            product.quantity +=1
            newCart=[...rest,product]
        }
        setCart(newCart)
        addedStorage(product.id)
    };
    const clearCart = () => {
      setCart([]);
      clearStorage();
    };
    const navigate=useNavigate()

    return (
      <div className="flex">
        <div className="grid grid-cols-3 gap-4 w-3/4 m-4">
          {products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        <div className="bg-zinc-200 w-1/4 ml-4">
          <Cart cart={cart} clearCart={clearCart}>
            <button onClick={()=>navigate('/order')}
              className="bg-green-200 w-2/5 ml-2 rounded-xl hover:bg-green-500 mt-4 mb-20"
            >
              Review Order
            </button>
          </Cart>
        </div>
      </div>
    );
};

export default Shop;