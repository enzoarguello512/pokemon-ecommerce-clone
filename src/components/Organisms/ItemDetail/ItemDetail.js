import React, {useState, useContext, useRef} from "react"
import Image from "../../Atoms/Image/Image";
import ItemCount from './../../Molecules/ItemCount/ItemCount';
import {CartContext} from '../../Contexts/CartContext/CartContext';
import {Link} from 'react-router-dom';
import * as bootstrap from 'bootstrap';

const {Toast} = bootstrap

require('./ItemDetail.css');

function ItemDetail({item}) {

  const [quantity, setQuantity] = useState(1);

  const toastRef = useRef();

  const ctx = useContext(CartContext);

  const onAdd = quantityToAdd => {
    const myToast = toastRef.current
    let bsToast;
    bsToast = new Toast(myToast, {autohide: true, animation: true, delay: 4500})
    bsToast.show();

    setQuantity(quantityToAdd);
    item.quantityOnCart = quantityToAdd;
    ctx.addItem(item);
  }

  return <>
    <div className="row pt-4">
      <div className="col-6">
        <div className="mx-3">
          <div className="item-image my-3">
            <div className="text-center">
              <Image src={item.imgSrc} alt={item.imgAlt} />
            </div>
          </div>
          <div className="text-center">
            <div className="mt-5 mb-2">
              <a
                href={`https://www.pokemon.com/el/pokedex/${item.name.toLowerCase()
                  .replace('-ex', '')
                  .replace('-gx', '')
                  .replace('m ', '')
                  .split(' ').shift()
                  }`}

                className="btn px-4 bg-gradient btn-orange text-white">
                {`Buscar a ${item.name} en la Pokédex`}
              </a>
            </div>
            <Link to="/gamecards" className="btn px-4 bg-gradient btn-orange text-white">Explorar más cartas</Link>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="mx-3">
          <div className="item-description my-3">
            <div className="item-description__item-title">
              <h1>{item.name}</h1>
            </div>
            <div className="item-description__pokemon-type fs-5 rounded d-flex justify-content-between">
              <div className="fw-bold">Pokémon Básico:</div>
              <div>{item.url.split('/')[2]}</div>
            </div>
            <div className="item-description__basic-info">
              {item.description}
            </div>
            <div className="item-description__card-series fs-5 rounded d-flex justify-content-between">
              <div className="fw-bold">Numero de carta:</div>
              <div className="d-flex align-items-center justify-content-center">
                {item.cardNumber}
                <a href="https://www.pokemon.com/el/jcc-pokemon/cartas-pokemon/?p-bw=">
                  <div className="series"/>
                </a>
              </div>
            </div>
          </div>
          <div className="my-3 text-center">
            <ItemCount price={item.price} stock={item.stock} initial={quantity} onAdd={onAdd} />
          </div>
        </div>
      </div>

      <div className="toast-container p-3">

        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" ref={toastRef}>
          <div className="toast-header">
            <span className="me-2">
              <i className="far fa-check-circle"/>
            </span>
            <strong className="me-auto">{item.name}</strong>
            <small className="text-muted">Hace menos de 1 minuto</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"/>
          </div>
          <div className="toast-body fw-bold text-center">{`${item.quantityOnCart}x unidades - Agregadas al carrito`}</div>
        </div>

      </div>

    </div>
  </>
}

export default ItemDetail
