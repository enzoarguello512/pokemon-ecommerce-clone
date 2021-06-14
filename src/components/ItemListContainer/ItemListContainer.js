import React, {useState} from "react"
import './ItemListContainer.css';

function ItemListContainer({children}) {
  return <>
    <div className="list-container">
      {children}
    </div>
  </>;
}

export default ItemListContainer
