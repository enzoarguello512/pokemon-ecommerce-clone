import React from "react"
import test from './../../img/BWP_ES_BW01.png';

function Item({item}) {
  return (
    <li>
      <a href={item.userId}>
        <div className="text-center">
          <img src={test} alt="test" />
          <div>{item.title}</div>
          <div>{item.id}</div>
          <div>{item.body}</div>
        </div>
      </a>
    </li>
  )
}

export default Item
