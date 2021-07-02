import React from 'react';
import TemplatePokedex from './../../Templates/TemplatePokedex/TemplatePokedex';
import Navbar from './../../Organisms/Navbar/Navbar';
import Footer from '../../Organisms/Footer/Footer';

function Pokedex() {
  return (
    <TemplatePokedex
      header={<Navbar />}
      mainTitle={'main title'}
      searcher={'searcher'}
      sortby={'sortby'}
      listedPokemons={'listedPokemons'}
      footer={<Footer />}
    />
  )
}

export default Pokedex


