import React, {useEffect, useState} from "react"
import PropTypes from 'prop-types';
import ItemDetail from './../ItemDetail/ItemDetail';
import H5 from './../../Atoms/H5/H5';
//import axios from 'axios';
import {pokemonsGrass} from './../../../json-data-grass';
import {pokemonsLightning} from './../../../json-data-lightning';

const combo = [...pokemonsGrass, ...pokemonsLightning];

function ItemDetailContainer({match}) {

  const [item, setItem] = useState({});


  //useEffect(() => {
  //axios('url').then(res => {
  //console.log(res);
  //setItem(res);
  //});
  //}, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const poke = combo.find(elem => elem.url === match.url);
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
