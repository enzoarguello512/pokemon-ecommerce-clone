import React, {useEffect, useState} from "react"
import PropTypes from 'prop-types';
import ItemDetail from './../ItemDetail/ItemDetail';
import H5 from './../../Atoms/H5/H5';
//import axios from 'axios';
import {pokemons} from './../../../json-data-text';

function ItemDetailContainer({match}) {

  const [item, setItem] = useState({});

  //useEffect(() => {
  //axios('url').then(res => {
  //console.log(res);
  //setItem(res);
  //});
  //}, []);

  useEffect(() => {
    const poke = pokemons.find(elem => elem.url === match.url);
    setItem(poke);
  }, [match])

  return <>
    {Object.values(item).length > 0 ? <ItemDetail item={item} /> : <H5 titleClass='text-center'>Loading</H5>}
  </>
}

ItemDetailContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ItemDetailContainer
