import React, {useContext, useEffect} from "react"
import CartItem from "../CartItem/CartItem";
import {CartContext} from './../../Contexts/CartContext/CartContext';
import {Link} from 'react-router-dom';
import Button from "../../Atoms/Button/Button";
import H1 from "../../Atoms/H1/H1";
import ReactTooltip from 'react-tooltip';

require('./CartSummary.css')

function CartSummary() {

  const ctx = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (

    <div className="container-xxl my-5">
      <H1 titleClass="text-decoration-underline border-bottom pb-3 pt-4 m-0">Checkout</H1>
      <div className="min-h-300px row justify-content-evenly">
        <div className="col-8 bg-info my-3 rounded">

          <form className="row g-3 needs-validation">

            <div class="col-12">
              <label for="cardOwnerName" class="form-label">Card Owner</label>
              <input type="text" class="form-control" id="cardOwnerName" placeholder="Card owner name"
                aria-describedby="cardOwnerName-feedback" required />
              <div id="cardOwnerName-feedback" class="invalid-feedback">
                Please fill in the name of the card owner
              </div>
            </div>

            <div class="col-12">
              <label for="cardNumber" class="form-label">Card Number</label>
              <div className="input-group">
                <input type="text" class="form-control" id="cardNumber" placeholder="Valid card number"
                  aria-describedby="cardNumber-feedback" required />
                <span class="input-group-text text-muted">
                  <i class="fab fa-cc-visa mx-1"></i>
                  <i class="fab fa-cc-mastercard mx-1"></i>
                  <i class="fab fa-cc-amex mx-1"></i>
                </span>
              </div>
              <div id="cardNumber-feedback" class="invalid-feedback">
                Please fill in a valid number
              </div>
            </div>

            <div class="col-8">
              <label htmlFor="expirationDateMonth" className="form-label">Fecha de expiracion</label>
              <div className="input-group">
                <input type="number" class="form-control" id="expirationDateMonth" placeholder="Mes"
                  aria-describedby="expirationDate-feedback" required />
                <input type="number" class="form-control" id="expirationDateYear" placeholder="Año"
                  aria-describedby="expirationDate-feedback" required />
                <div id="expirationDate-feedback" class="invalid-feedback">
                  Please fill in the expiration date
                </div>
              </div>
            </div>

            <div class="col-4">
              <label for="cardNumber" class="form-label" data-tip="Código CVV de tres dígitos en el reverso de su tarjeta">
                <span className="me-1">CVV</span>
                <i class="fa fa-question-circle"></i>
              </label>
              <input type="text" class="form-control" id="cvvNumber" placeholder="CVV"
                aria-describedby="cvvNumber-feedback" required />
              <div id="cvvNumber-feedback" class="invalid-feedback">
                Please fill in the cvv number
              </div>
              <ReactTooltip place="top" type="dark" effect="solid" />
            </div>

          </form>

        </div>
        <div className="col-3 bg-light border my-3 rounded">
          <h2>Resumen del carro</h2>
          <div className="border-bottom pb-3 mb-3 border-dark">
            <span>Precio final: 4733,09 ARS</span>
          </div>
          <span>TOTAL: $3000</span>
          <div className="my-2">
            <Button>Completar orden</Button>
          </div>
        </div>

        <div className="col-12 text-center">
          asd
        </div>

      </div>
    </div >
  );

  return (
    <div className="container-xxl my-5">
      <H1 titleClass="text-center text-decoration-underline border-bottom pb-3 pt-4 m-0">Resumen de la compra</H1>
      <div className="min-h-300px">

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
            <div className="border-top pb-4">
              <div className="row">
                <div className="col-12 text-end mb-4 mt-3">
                  <h3><span className="fw-bold text-decoration-underline">Total:</span> {`${ctx.cart.reduce((acc, elem) => acc + elem.price * elem.quantityOnCart, 0)}.00 $`}</h3>
                </div>
                <div className="col-6 text-start">
                  <Button btnClass="btn-primary bg-gradient" onClick={() => ctx.clearCart()}>
                    <span className="pe-2">
                      <i className="far fa-times-circle"></i>
                    </span>
                    Limpiar carrito
                  </Button>
                </div>
                <div className="col-6 text-end">
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
            </div>
          )}

      </div>
    </div >
  )
}


export default CartSummary
