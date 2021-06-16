import React, {useState} from "react"
import './ItemCount.css';

function ItemCount({stock, initial, onAdd}) {

  const [count, setCount] = useState(initial);

  const countHandler = (action) => {
    if (count < stock && action === 'add') {
      setCount(count + 1);
    }
    if (count > 0 && action === 'substract') {
      setCount(count - 1);
    }
  }

  const countInput = (value) => {
    value = parseInt(value)
    if (value >= 0 && value <= stock) setCount(value);
  }

  return (
    <div className="input-group">
      <button className="btn btn-orange px-4" type="button" onClick={() => countHandler('substract')}>-</button>
      <input className="form-control text-center" type="number" aria-label="item quantity" value={count} onChange={event => {countInput(event.target.value)}} />
      <button className="btn btn-orange px-4" type="button" onClick={() => countHandler('add')}>+</button>
    </div >
  )
}

ItemCount.defaultProps = {
  stock: 1,
  initial: 1,
}

export default ItemCount
