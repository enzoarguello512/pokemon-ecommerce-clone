import React, {useContext, useEffect, useState} from "react"
import PropTypes from 'prop-types';
import Button from "../../Atoms/Button/Button"
import Input from './../../Atoms/Input/Input';
import Image from './../../Atoms/Image/Image';
import {Link} from 'react-router-dom';
import {CartContext} from '../../Contexts/CartContext/CartContext';


require('./CartItem.css')

function CartItem({item}) {

  let [count, setCount] = useState(item.quantityOnCart);

  const ctx = useContext(CartContext);

  useEffect(() => {
    item.quantityOnCart = count;
    ctx.cart[ctx.cart.indexOf(item)] = item;
    ctx.setCart(ctx.cart);
    ctx.setTotalQuantity(ctx.cart.reduce((acc, elem) => acc + elem.quantityOnCart, 0))
  }, [count, ctx, item])

  const countHandler = (action) => {
    if (count < item.stock && action === 'add') {
      setCount(count + 1);
    }
    if (count > 0 && action === 'substract') {
      setCount(count - 1);
    }
  }

  const countInput = (value) => {
    if (value >= 0 && value <= item.stock) {
      value.replace(/\D/g, '');
      if (value === '') value = 0;
      setCount(parseInt(value))
    }
  }

  return (
    <div className="shadow rounded row my-3">
      <div className="col-2 text-center rounded-start">
        <figure className="m-0">
          <Image imgClass="img-fluid h-100px my-2 shadow" src={item.imgSrc} alt={item.imgAlt} />
        </figure>
      </div>
      <div className="col-4">
        <div className="d-flex flex-column justify-content-center h-100">
          <h3 className="fw-bold text-truncate">
            <Link to={`/gamecards/${item.url.split('/')[2]}/${item.id}`} className="text-dark text-decoration-none">{item.name}</Link>
          </h3>
          <p className="text-truncate">{item.description}</p>
        </div>
      </div>
      <div className="col-3">
        <div className="d-flex flex-column justify-content-center h-100">
          <label className="text-center">{`Cantidad: (max ${item.stock})`}</label>
          <div className="input-group justify-content-center">
            <Button btnClass="btn-red text-white border" onClick={() => countHandler('substract')}>-</Button>
            <Input inputClass="form-control text-center border" ariaLabel="item quantity" value={count} onChange={e => {countInput(e.target.value)}} />
            <Button btnClass="btn-red text-white border" onClick={() => countHandler('add')}>+</Button>
          </div>
        </div>
      </div>
      <div className="col-3 rounded-end">
        <div className="text-end">
          <Button btnClass="btn-white text-danger border my-2" onClick={() => ctx.removeItem(item)}>
            <i className="far fa-trash-alt"></i>
          </Button>
          <div className="fw-bold mt-2">{`${item.price * item.quantityOnCart}.00 $`}</div>
        </div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};


export default CartItem
