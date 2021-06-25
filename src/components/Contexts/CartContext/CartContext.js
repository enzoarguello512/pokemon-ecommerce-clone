import React, {useState, createContext} from 'react';

export const cartContext = createContext();

function CartProvider({children}) {

  const [items, setItems] = useState([]);

  //const cart = localStorage.getItem('cart');

  //if (cart) {
  //setItems(JSON.parse(cart));
  //}

  return (
    <cartContext.Provider value={[items, setItems]}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider
