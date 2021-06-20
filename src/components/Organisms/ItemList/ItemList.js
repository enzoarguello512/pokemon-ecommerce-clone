import React, {useState, useEffect} from "react"
import PropTypes from 'prop-types';
import Item from './../../Molecules/Item/Item';
import {pokemons} from './../../../json-data-text';

require('./ItemList.css');

function ItemList({urlPokemonType}) {

  const [items, setItems] = useState([]);

  //useEffect(() => {
  //const fetchData = async () => {
  //try {
  //const response = await fetch(urlPokemonType);
  //const responseJson = await response.json();
  //setItems(responseJson);
  //}
  //catch (error) {
  //console.log(error);
  //}
  //}

  //fetchData();
  //}, [urlPokemonType]);

  useEffect(() => {
    setItems(pokemons)
  }, [])

  return (
    <ul className="list-unstyled d-flex flex-wrap justify-content-evenly mx-auto" style={{width: 1024}}>
      {items && items.length > 0 ? items.map(obj => <Item item={obj} key={obj.id} />) : "Items not found"}
    </ul>
  )
}

//<Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />


ItemList.propTypes = {
  urlPokemonType: PropTypes.string.isRequired,
};

export default ItemList
