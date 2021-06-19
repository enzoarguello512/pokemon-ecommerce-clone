import React from "react"

function Item({item}) {
  return (
    <li>
      <a href={item.userId}>
        <div className="text-center">
          <img src="/images/BWP_ES_BW01.png" alt="test" />
          <div>{item.title}</div>
          <div>{item.id}</div>
          <div>{item.body}</div>
        </div>
      </a>
    </li>
  )
}

export default Item
