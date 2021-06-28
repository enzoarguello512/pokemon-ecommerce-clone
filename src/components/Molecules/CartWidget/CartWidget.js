import React, {useContext} from "react"
import {cartContext} from './../../Contexts/CartContext/CartContext';
import {Link} from 'react-router-dom';
import Image from './../../Atoms/Image/Image';


function CartWidget() {

  const ctx = useContext(cartContext);

  return <>
    <Link to="/cart" className="position-relative">
      <Image imgClass="cart-widget-icon" src="/icons/cart.svg" alt="cart-icon" />
      {ctx.cart.length > 0 &&
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded bg-danger">
          <span>{ctx.totalQuantity}</span>
          <span className="visually-hidden">cart</span>
        </span>
      }
    </Link>
  </>
}
//<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
export default CartWidget

