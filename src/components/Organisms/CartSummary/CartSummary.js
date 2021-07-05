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
    const forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  }, [])

  return (

    <div className="container-xxl my-5">
      <ol className="breadcrumb m-0 pt-4">
        <li className="breadcrumb-item"><Link to="/cart">Cart</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Checkout</li>
      </ol>
      <H1 titleClass="text-decoration-underline border-bottom pb-3 pt-4 m-0">Checkout</H1>
      <div className="min-h-300px">
        <form className="needs-validation row justify-content-evenly" noValidate>
          <div className="col-8 my-3 bg-light border rounded">

            <div className="row g-3">

              <div className="col-12">
                <label htmlFor="cardOwnerName" className="form-label">Titular</label>
                <input type="text" className="form-control" id="cardOwnerName" placeholder="Titular de la tarjeta"
                  aria-describedby="cardOwnerName-feedback" required />
                <div id="cardOwnerName-feedback" className="invalid-feedback">
                  Ingrese el nombre del propietario de la tarjeta
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="cardNumber" className="form-label">Número de tarjeta</label>
                <div className="input-group">
                  <input type="text" className="form-control" id="cardNumber" placeholder="Número valido de tarjeta"
                    aria-describedby="cardNumber-feedback" required />
                  <span className="input-group-text text-muted fs-5">
                    <i className="fab fa-cc-visa mx-1 fa-fw"></i>
                    <i className="fab fa-cc-mastercard mx-1 fa-fw"></i>
                    <i className="fab fa-cc-amex mx-1 fa-fw"></i>
                  </span>
                  <div id="cardNumber-feedback" className="invalid-feedback">
                    Por favor ingrese un número de tarjeta válido
                  </div>
                </div>
              </div>

              <div className="col-8 mb-3">
                <label htmlFor="expirationDateMonth" className="form-label">Fecha de vencimiento</label>
                <div className="input-group">
                  <input type="number" className="form-control" id="expirationDateMonth" placeholder="Mes"
                    aria-describedby="expirationDate-feedback" required />
                  <input type="number" className="form-control" id="expirationDateYear" placeholder="Año"
                    aria-describedby="expirationDate-feedback" required />
                  <div id="expirationDate-feedback" className="invalid-feedback">
                    Por favor complete la fecha de vencimiento
                  </div>
                </div>
              </div>

              <div className="col-4 mb-3">
                <label htmlFor="cardNumber" className="form-label" data-tip="Código CVV de tres dígitos en el reverso de su tarjeta">
                  <span className="me-1">CVV</span>
                  <i className="fa fa-question-circle"></i>
                </label>
                <input type="text" className="form-control" id="cvvNumber" placeholder="CVV"
                  aria-describedby="cvvNumber-feedback" required />
                <div id="cvvNumber-feedback" className="invalid-feedback">
                  Por favor ingrese el número de cvv
                </div>
                <ReactTooltip place="top" type="dark" effect="solid" />
              </div>

            </div>
          </div>

          <div className="col-3 bg-light border my-3 rounded">
            <h2>Resumen del carro</h2>
            <div className="border-bottom pb-3 mb-3 border-dark">
              <span>Precio final: 4733,09 ARS</span>
            </div>
            <span>TOTAL: $3000</span>
            <div className="my-2">
              <Button type="submit">Confirmar pago</Button>
            </div>
          </div>

          <div className="col-12 border-top mb-5"></div>
        </form>

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
