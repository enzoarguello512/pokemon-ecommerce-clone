import React, {useState, createContext, useEffect} from 'react';
import useLocalStorage from './../../Utils/CartHelper';

export const CartContext = createContext();

function CartProvider({children}) {

  const [storedValue, setValue] = useLocalStorage('cart', []);

  const [cart, setCart] = useState(storedValue);
  const [totalQuantity, setTotalQuantity] = useState(0);


  useEffect(() => {
    setTotalQuantity(cart.reduce((acc, elem) => acc + elem.quantityOnCart, 0))
  }, [cart]);

  const addItem = (item) => {
    //if the item already exists, it will be replaced/updated with the new values that come from the parameters
    if (cart.includes(item)) {
      cart[cart.indexOf(item)] = item;
      setCart(cart);
      setValue(cart);
    }
    //otherwise, it will be added directly to the shopping cart
    else {
      setCart([...cart, item]);
      setValue([...cart, item]);
    }
    setTotalQuantity(cart.reduce((acc, elem) => acc + elem.quantityOnCart, 0));
  }

  const removeItem = (item) => {
    cart.splice(cart.indexOf(item), 1);
    setValue(cart);
    setTotalQuantity(cart.reduce((acc, elem) => acc + elem.quantityOnCart, 0));
  }

  const clearCart = () => {
    setCart([]);
    setValue([]);
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
