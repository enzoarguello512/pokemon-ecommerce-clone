import React from "react"
import ItemList from "../ItemList/ItemList";

require('./ItemListContainer.css');

function ItemListContainer() {
  return <>
    <div className="list-container">
      <ItemList urlPokemonType=''></ItemList>
    </div>
  </>;
}

export default ItemListContainer
