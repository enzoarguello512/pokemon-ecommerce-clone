import React from "react"
import ItemList from "../ItemList/ItemList";

require('./ItemListContainer.css');

function ItemListContainer({categories}) {

  return <>
    <div className="list-container">
      <ItemList categories={categories}></ItemList>
    </div>
  </>;
}

export default ItemListContainer
