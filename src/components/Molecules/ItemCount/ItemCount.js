import React, {useState} from "react"
import PropTypes from 'prop-types';
import Button from './../../Atoms/Button/Button';
import Input from './../../Atoms/Input/Input';

require('./ItemCount.css');

function ItemCount({stock, initial}) {

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
    if (value >= 0 && value <= stock) setCount(value);
  }

  return (
    <div className="input-group">
      <Button onClick={() => countHandler('substract')}>-</Button>
      <Input textAlign="text-center" type="number" ariaLabel="item quantity" value={count} onChange={event => {countInput(event.target.value)}} />
      <Button onClick={() => countHandler('add')}>+</Button>
    </div>
  )
}

ItemCount.defaultProps = {
  stock: 0,
  initial: 0,
}

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number.isRequired
}


export default ItemCount
