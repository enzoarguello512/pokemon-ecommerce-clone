import React from 'react';
import TemplatePokedex from './../../Templates/TemplatePokedex/TemplatePokedex';
import Navbar from './../../Organisms/Navbar/Navbar';
import Footer from '../../Organisms/Footer/Footer';
import H1 from './../../Atoms/H1/H1'
import Searcher from '../../Organisms/Searcher/Searcher';

function Pokedex() {
  return (
    <TemplatePokedex
      header={<Navbar />}
      mainTitle={<H1 titleClass="text-secondary">Pokédex</H1>}
      searcher={<Searcher />}
      sortby={'sortby'}
      listedPokemons={'listedPokemons'}
      footer={<Footer />}
    />
  )
}

export default Pokedex


