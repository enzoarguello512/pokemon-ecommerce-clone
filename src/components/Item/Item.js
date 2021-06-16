import React from "react"
import ItemCount from "../ItemCount/ItemCount";
import test from './../../img/BWP_ES_BW01.png';

function Item({name}) {
  return (
    <li>
      <a href={name}>
        <div className="text-center">
          <img src={test} alt={name} />
          <div>{name}</div>
        </div>
      </a>
    </li>
  )
}

//<ItemCount stock={26} initial={1} />
export default Item
