import React, {useState} from "react"

function ItemCount({stock, initial, onAdd}) {

  const [count, setCount] = useState(initial);

  const countHandler = (value, action) => {
    if (value <= stock && action === 'add') {
      count++;
    }
    if (value >= stock && action === 'substract') {
      count++;
    }
  }

  return (
    <div class="input-group">
      <button className="btn btn-danger px-4" type="button" onClick={console.log("asd")}>-</button>
      <input type="text" className="form-control text-center" aria-label="item quantity" defaultValue={initial} />
      <button className="btn btn-danger px-4" type="button">+</button>
    </div>
  )
}

export default ItemCount
