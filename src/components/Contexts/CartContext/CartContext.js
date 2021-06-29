import React, {useState, createContext, useEffect} from 'react';

export const CartContext = createContext();

function CartProvider({children}) {

  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    setTotalQuantity(cart.reduce((acc, elem) => acc + elem.quantityOnCart, 0))
  }, [cart]);

  const addItem = (item) => {
    //if the item already exists, it will be replaced/updated with the new values that come from the parameters
    if (cart.includes(item)) {
      cart[cart.indexOf(item)] = item;
      setCart(cart);
    }
    //otherwise, it will be added directly to the shopping cart
    else setCart([...cart, item]);
    setTotalQuantity(cart.reduce((acc, elem) => acc + elem.quantityOnCart, 0));
  }

  const removeItem = (item) => {
    cart.splice(cart.indexOf(item), 1);
    setTotalQuantity(cart.reduce((acc, elem) => acc + elem.quantityOnCart, 0));
  }

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
  }

  const value = {
    cart,
    setCart,
    addItem,
    removeItem,
    clearCart,
    totalQuantity,
    setTotalQuantity,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
