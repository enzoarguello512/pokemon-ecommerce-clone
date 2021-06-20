import React, {useEffect, useState} from "react"
import ItemDetail from './../ItemDetail/ItemDetail';
import axios from 'axios';
import {pokemons} from './../../../json-data-text';

function ItemDetailContainer() {

  const [item, setItem] = useState({});

  useEffect(() => {
    axios('url').then(res => {
      console.log(res);
      setItem(res);
    });
  }, []);

  return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailContainer
