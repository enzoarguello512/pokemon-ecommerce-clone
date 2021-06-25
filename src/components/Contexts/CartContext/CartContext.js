import React, {useState, createContext} from 'react';

export const cartContext = createContext();

function CartProvider({children}) {

  const [cart, setCart] = useState([]);

  //const cart = localStorage.getItem('cart');

  //if (cart) {
  //setItems(JSON.parse(cart));
  //}

  const addItem = (item, quantity) => {
    setCart([...cart, {'item': item, 'quantity': quantity}]);
  }

  const removeItem = (item) => {
    cart.splice(cart.indexOf(item), 1);
  }

  const clearCart = () => {
    setCart([]);
  }

  const isInCart = (item) => {
    const result = cart.findIndex((obj) => obj.id === item.id);
    if (result !== 1) return true;
    return false;
  }

  console.log(cart);

  return (
    <cartContext.Provider value={[cart, setCart, addItem, removeItem, clearCart, isInCart]}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider
