import React, {useContext, useEffect} from "react"
import CartItem from "../CartItem/CartItem";
//import PropTypes from 'prop-types';
import {cartContext} from './../../Contexts/CartContext/CartContext';
import {Link} from 'react-router-dom';
import Button from "../../Atoms/Button/Button";

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

        {ctx.cart && ctx.cart.length > 0
          ? ctx.cart.map(item => <CartItem item={item} key={item.id} />)
          : (
            <div className="pt-5 text-center ">
              <div className="mb-2">
                <i className="fas fa-shopping-bag fa-3x"></i>
              </div>
              <h3 className="mb-3">El carrito esta vacio</h3>
              <Link to="/gamecards" className="btn btn-outline-primary">Visitar el catalogo</Link>
            </div>
          )}

        {ctx.cart && ctx.cart.length > 0 &&
          (
            <div className="border-top pt-3">
              <div className="text-end">
                <h3 className="mb-4"><span className="fw-bold text-decoration-underline">Total:</span> {`${ctx.cart.reduce((acc, elem) => acc + elem.price * elem.quantityOnCart, 0)}.00 $`}</h3>
                <Button btnClass="btn-primary bg-gradient">
                  <span className="pe-2">
                    <i className="fas fa-lock"></i>
                  </span>
                  <span className="pe-3">
                    Checkout
                  </span>
                  <span>
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Button>
              </div>
            </div>
          )}
      </div>
    </div >
  )
}


export default CartSummary
