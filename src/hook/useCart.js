import { useEffect, useState } from 'react';
import { getStorage } from '../Component/Storage/Storage';
const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const getStorageItem = getStorage();
    const saveCart = [];
    for (const id in getStorageItem) {
        const addProduct=products.find(product=> product.id===id)
        if(addProduct){
            addProduct.quantity=getStorageItem[id]
            saveCart.push(addProduct)
        }
    }
    setCart(saveCart)
  }, [products]);
  return [cart, setCart];
};
export default useCart