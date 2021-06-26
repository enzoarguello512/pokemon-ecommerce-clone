import React, {useState, createContext} from 'react';

export const cartContext = createContext();

function CartProvider({children}) {

  const [cart, setCart] = useState([]);

  //const cart = localStorage.getItem('cart');

  //if (cart) {
  //setItems(JSON.parse(cart));
  //}

  const addItem = (item, quantity) => {
    const resultId = cart.findIndex((obj) => obj.item.id === item.id);
    console.log('soy result', resultId);
    if (resultId !== -1) {
      cart[resultId].quantity = quantity;
    } else {
      setCart([...cart, {'item': item, 'quantity': quantity}]);
    }
    console.log('soy carro', cart);
  }

  const removeItem = (item) => {
    cart.splice(cart.indexOf(item), 1);
  }

  const clearCart = () => {
    setCart([]);
  }


  return (
    <cartContext.Provider value={{cart, setCart, addItem, removeItem, clearCart}}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider
