import React, {useState} from "react"
//import ItemCount from "../ItemCount/ItemCount";
import test from './../../img/BWP_ES_BW01.png';

function Item({name}) {
  return (
    <li className="d-inline-block">
      <a href={name}>
        <div className="text-center">
          <h5>{name}</h5>
          <img src={test} alt={name} />
        </div>
      </a>
    </li>
  )
}

//<ItemCount stock={26} initial={1} />
export default Item
