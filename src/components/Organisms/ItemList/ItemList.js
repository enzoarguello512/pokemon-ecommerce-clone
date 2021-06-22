import React, {useState, useEffect} from "react"
import PropTypes from 'prop-types';
import Item from './../../Molecules/Item/Item';
import H5 from './../../Atoms/H5/H5';
import {pokemonsGrass} from './../../../json-data-grass';

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
    setItems(pokemonsGrass)
  }, [])

  return (
    <ul className="list-unstyled d-flex flex-wrap justify-content-evenly mx-auto">
      {items && items.length > 0 ? items.map(obj => <Item item={obj} key={obj.id} />) : <H5 titleClass='text-center'>"Items not found"</H5>}
    </ul>
  )
}

ItemList.propTypes = {
  urlPokemonType: PropTypes.string.isRequired,
};

export default ItemList
