import React, {useEffect, useState} from "react"
import ItemDetail from './../ItemDetail/ItemDetail';

function ItemDetailContainer() {

  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlPokemonType);
        const responseJson = await response.json();
        setItems(responseJson);
      }
      catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [urlPokemonType]);

  useEffect(() => {
    'asd'
  }, []);

  return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailContainer
