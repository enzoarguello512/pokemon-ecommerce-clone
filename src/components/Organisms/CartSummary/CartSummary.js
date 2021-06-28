import React, {useContext, useEffect} from "react"
import CartItem from "../CartItem/CartItem";
//import PropTypes from 'prop-types';
import {cartContext} from './../../Contexts/CartContext/CartContext';
import {Link} from 'react-router-dom';

require('./CartSummary.css')

function CartSummary() {

  const ctx = useContext(cartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="container-xxl my-5">
      <h1 className="text-center fs-2 fw-bold text-decoration-underline border-bottom pb-3 m-0">Resumen de la compra</h1>
      <div className="clase-alta-300px">

        {ctx.cart && ctx.cart.length > 0 ? ctx.cart.map(item => <CartItem item={item} key={item.id} />) : (
          <div className="pt-5 text-center ">
            <div className="mb-2">
              <i className="fas fa-shopping-bag fa-3x"></i>
            </div>
            <h3 className="mb-3">El carrito esta vacio</h3>
            <Link to="/gamecards" className="btn btn-outline-primary">Visitar el catalogo</Link>
          </div>
        )}

      </div>
    </div >
  )
}


export default CartSummary
