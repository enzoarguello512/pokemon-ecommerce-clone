import React from 'react';
import TemplateTvPokemon from '../../Templates/TemplateTvPokemon/TemplateTvPokemon';
import Navbar from './../../Organisms/Navbar/Navbar';
import Footer from '../../Organisms/Footer/Footer';
import H1 from './../../Atoms/H1/H1'

function TvPokemon() {
  return (
    <TemplateTvPokemon
      header={<Navbar />}
      mainTitle={<H1 titleClass="text-secondary">TV Pokémon</H1>}
      hero={'hero'}
      newsColumn={'newsColumn'}
      news={'newsColumn'}
      footer={<Footer />}
    />
  );
}

export default TvPokemon;
