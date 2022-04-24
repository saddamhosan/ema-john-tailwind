import { useEffect, useState } from 'react';
import { getStorage } from '../Component/Storage/Storage';
const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const getStorageItem = getStorage();
    const saveCart = [];
    const keys=Object.keys(getStorageItem)
    console.log(keys);
    fetch("http://localhost:4000/productsByKeys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        console.log('post success');
        for (const id in getStorageItem) {
          const addProduct = products.find((product) => product._id === id);
          if (addProduct) {
            addProduct.quantity = getStorageItem[id];
            saveCart.push(addProduct);
          }
        }
        setCart(saveCart);
      });

    
  }, []);
  return [cart, setCart];
};
export default useCart