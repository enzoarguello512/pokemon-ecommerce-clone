import React, {useState} from "react"
import PropTypes from 'prop-types';
import Button from './../../Atoms/Button/Button';
import Input from './../../Atoms/Input/Input';
import {Link} from 'react-router-dom';

require('./ItemCount.css');

function ItemCount({price, stock, initial, onAdd}) {

  let [count, setCount] = useState(initial);

  const countHandler = (action) => {
    if (count < stock && action === 'add') {
      setCount(count + 1);
    }
    if (count > 0 && action === 'substract') {
      setCount(count - 1);
    }
  }

  const countInput = (value) => {
    if (value >= 0 && value <= stock) {
      value.replace(/\D/g, '');
      if (value === '') value = 0;
      setCount(parseInt(value))
    };
  }

  return <>
    <h2 className="text-center">{`$${price * count}`}</h2>
    <label className="fw-bold" htmlFor="quantity">Cantidad: {count} - <span className="text-muted">{`(${stock} disponibles)`}</span></label>
    <div className="input-group">
      <Button onClick={() => countHandler('substract')}>-</Button>
      <Input inputClass="form-control text-center" id="quantity" type="number" ariaLabel="item quantity" value={count} onChange={event => {countInput(event.target.value)}} />
      <Button onClick={() => countHandler('add')}>+</Button>
    </div>
    <div className="d-grid gap-3 mt-4">
      <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
      <Link to="/cart" className="btn btn-primary bg-gradient px-4">Comprar ahora</Link>
    </div>
  </>
}

ItemCount.defaultProps = {
  stock: 0,
  initial: 0,
}

ItemCount.propTypes = {
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number.isRequired,
}


export default ItemCount
