import React, {useState, createContext} from 'react';

export const cartContext = createContext();

function CartProvider({children}) {

  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    //if the item already exists, it will be replaced/updated with the new values that come from the parameters
    if (cart.includes(item)) cart[cart.indexOf(item)] = item;
    //otherwise, it will be added directly to the shopping cart
    else setCart([...cart, item]);
  }

  const removeItem = (item) => {
    cart.splice(cart.indexOf(item), 1);
  }

  const clearCart = () => {
    setCart([]);
  }


  const value = {
    cart,
    setCart,
    addItem,
    removeItem,
    clearCart,
  }

  return (
    <cartContext.Provider value={value}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider
