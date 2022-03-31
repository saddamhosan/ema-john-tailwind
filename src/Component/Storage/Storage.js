const addedStorage=(id)=>{
    const shoppingCart = getStorage()
    
    const quantity=shoppingCart[id]
    if(quantity){
        shoppingCart[id]=quantity+1
    }else{
        shoppingCart[id]=1
    }


    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}
const getStorage=()=>{
    let shoppingCart = {};
    const getItem = localStorage.getItem("shopping-cart");
    if (getItem) {
      shoppingCart = JSON.parse(getItem);
    }
    return shoppingCart
}
const removeStorage=(id)=>{
    const shoppingCart=getStorage()
    if(shoppingCart){
        if(id in shoppingCart)
        delete shoppingCart[id]
        localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
}
const clearStorage=()=>{
    localStorage.removeItem("shopping-cart");
}
export { addedStorage, getStorage, removeStorage, clearStorage }

