import React from 'react';
import TemplatePokedex from './../../Templates/TemplatePokedex/TemplatePokedex';
import Navbar from './../../Organisms/Navbar/Navbar';

function Pokedex() {
  return (
    <TemplatePokedex
      header={<Navbar />}
      mainTitle={'main title'}
      searcher={'searcher'}
      sortby={'sortby'}
      listedPokemons={'listedPokemons'}
      footer={'footer'}
    />
  )
}

export default Pokedex


