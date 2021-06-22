import React from "react"
import ItemList from "../ItemList/ItemList";
import {pokemonsGrass} from './../../../json-data-grass';

require('./ItemListContainer.css');

function ItemListContainer() {
  return <>
    <div className="list-container">
      <ItemList urlPokemonType={pokemonsGrass}></ItemList>
    </div>
  </>;
}

export default ItemListContainer
