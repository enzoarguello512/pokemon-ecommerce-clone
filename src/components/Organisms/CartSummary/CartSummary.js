import React, { useContext, useEffect, useState } from "react"
import CartItem from "../CartItem/CartItem";
import { CartContext } from '../../Contexts/CartContext/CartContext';
import { Link } from 'react-router-dom';
import Button from "../../Atoms/Button/Button";
import H1 from "../../Atoms/H1/H1";
import ReactTooltip from 'react-tooltip';
import { getFirestore, getFirestoreDate } from '../../../firebase';

require('./CartSummary.css')

function CartSummary() {

  const ctx = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  //input's state
  const [cardOwnerNameState, setCardOwnerNameState] = useState("");
  const [cardNumberState, setCardNumberState] = useState("");
  const [expirationDateMonthState, setExpirationDateMonthState] = useState("");
  const [expirationDateYearState, setExpirationDateYearState] = useState("");
  const [cvvNumberState, setCvvNumberState] = useState("");

  const completeOrder = () => {

    if (cardOwnerNameState
      && cardNumberState
      && expirationDateMonthState
      && expirationDateYearState
      && cvvNumberState) {

      const db = getFirestore();
      const orders = db.collection("orders");

      setLoading(true)

      const actualDate = getFirestoreDate();

      const newOrder = {
        buyer: {
          cardOwnerName: cardOwnerNameState,
          cardNumber: cardNumberState,
          expirationDateMonth: expirationDateMonthState,
          expirationDateYear: expirationDateYearState,
          cvvNumber: cvvNumberState,
        },
        items: ctx.cart,
        date: actualDate,
        total: ctx.cart.reduce((acc, elem) => acc + elem.price * elem.quantityOnCart, 0),
      }

      orders.add(newOrder)
        .then(({ id }) => {
          ctx.clearCart();
          window.location.href = `${window.location.href}/${id}`;
          setLoading(false);
        })
        .catch(err => console.log(err))

      // After this, you need to update your items stock.
      // To get all the categories if you are purchasing for multiple categories
      // I was thinking on adding a category value on each item
      // to match it with the actual categories of Firebase
      // I leave you this code as example 
      /* 
      const itemsToUpdate = db.collection('items').where(
        fb.firestore.FieldPath.documentId(), 'in', cart.map(i => i.id)
      )

      itemsToUpdate.get()
        .then(collection => {
          collection.docs.forEach(docSnapshot => {
            batch.update(docSnapshot.ref, {
              stock: docSnapshot.data().stock - cart.find(item => item.id === docSnapshot.id).qty
            })
          })
          batch.commit().then(res => console.log('resultado batch', res)
          ).catch(err => console.log(err))
        })
      */
    }

  }

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
      <H1 titleClass="text-center text-decoration-underline border-bottom pb-3 pt-4 m-0">Resumen de la compra</H1>
      <div className="min-h-300px">

        {ctx.cart && ctx.cart.length > 0
          ? ctx.cart.map(item => <CartItem item={item} key={item.id} />)
          : (
            <div className="pt-5 text-center ">
              <div className="mb-2">
                <i className="fas fa-shopping-bag fa-3x" />
              </div>
              <h3 className="mb-3">El carrito esta vacio</h3>
              <Link to="/gamecards" className="btn btn-outline-primary">Visitar el catalogo</Link>
            </div>
          )}

        {ctx.cart && ctx.cart.length > 0 &&
          <>

            <form className="needs-validation row justify-content-evenly py-5 border-top" noValidate onSubmit={(e) => e.preventDefault()}>
              <div className="col-8 bg-light border rounded">

                <div className="row g-3">

                  <div className="col-12 pt-3">
                    <label htmlFor="cardOwnerName" className="form-label">Titular</label>
                    <input type="text" className="form-control" id="cardOwnerName" placeholder="Titular de la tarjeta"
                      aria-describedby="cardOwnerName-feedback" required onChange={(e) => setCardOwnerNameState(e.target.value)} />
                    <div id="cardOwnerName-feedback" className="invalid-feedback">
                      Ingrese el nombre del propietario de la tarjeta
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="cardNumber" className="form-label">Número de tarjeta</label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="cardNumber" placeholder="Número valido de tarjeta"
                        aria-describedby="cardNumber-feedback" required onChange={(e) => setCardNumberState(e.target.value)} />
                      <span className="input-group-text text-muted fs-5">
                        <i className="fab fa-cc-visa mx-1 fa-fw" />
                        <i className="fab fa-cc-mastercard mx-1 fa-fw" />
                        <i className="fab fa-cc-amex mx-1 fa-fw" />
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
                        aria-describedby="expirationDate-feedback" required onChange={(e) => setExpirationDateMonthState(e.target.value)} />
                      <input type="number" className="form-control" id="expirationDateYear" placeholder="Año"
                        aria-describedby="expirationDate-feedback" required onChange={(e) => setExpirationDateYearState(e.target.value)} />
                      <div id="expirationDate-feedback" className="invalid-feedback">
                        Por favor complete la fecha de vencimiento
                      </div>
                    </div>
                  </div>

                  <div className="col-4 mb-3">
                    <label htmlFor="cardNumber" className="form-label" data-tip="Código CVV de tres dígitos en el reverso de su tarjeta">
                      <span className="me-1">CVV</span>
                      <i className="fa fa-question-circle" />
                    </label>
                    <input type="text" className="form-control" id="cvvNumber" placeholder="CVV"
                      aria-describedby="cvvNumber-feedback" required onChange={(e) => setCvvNumberState(e.target.value)} />
                    <div id="cvvNumber-feedback" className="invalid-feedback">
                      Por favor ingrese el número de cvv
                    </div>
                    <ReactTooltip place="top" type="dark" effect="solid" />
                  </div>

                </div>
              </div>

              <div className="col-3 bg-light border rounded">
                <div className="row align-items-center justify-content-center h-100">
                  <div className="col-12">
                    <h4 className="pt-3 pb-2">Resumen del carro</h4>
                    <div className="border-bottom pb-3 border-dark d-flex justify-content-between">
                      <div>Precio final:</div>
                      <div>{`${ctx.cart.reduce((acc, elem) => acc + elem.price * elem.quantityOnCart, 0)}.00 $`}</div>
                    </div>
                    <div className="pt-3 d-flex justify-content-between">
                      <div className="fw-bold">TOTAL:</div>
                      <div>{`${ctx.cart.reduce((acc, elem) => acc + elem.price * elem.quantityOnCart, 0)}.00 $`}</div>
                    </div>
                    <div className="py-3 d-grid gap-2">
                      <Button btnClass="btn-primary bg-gradient d-flex" onClick={() => ctx.clearCart()}>
                        <div>
                          <i className="far fa-times-circle fa-fw" />
                        </div>
                        <div className="flex-grow-1">Limpiar carrito</div>
                      </Button>
                      <Button btnClass="btn-green text-white text-center" type="submit" onClick={e => completeOrder(e)}>
                        {
                          !loading
                            ? (
                              <div className="d-flex">
                                <div>
                                  <i className="fas fa-lock fa-fw" />
                                </div>
                                <div className="flex-grow-1">Confirmar pago</div>
                              </div>
                            )
                            : (
                              <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </div>
                            )
                        }
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>

          </>
        }

      </div>
    </div >
  )
}


export default CartSummary
