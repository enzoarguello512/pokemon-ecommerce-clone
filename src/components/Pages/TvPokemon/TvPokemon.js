import React from 'react';
import TemplateTvPokemon from '../../Templates/TemplateTvPokemon/TemplateTvPokemon';
import Navbar from './../../Organisms/Navbar/Navbar';

function TvPokemon() {
  return (
    <TemplateTvPokemon
      header={<Navbar />}
      mainTitle={'mainTitle'}
      hero={'hero'}
      newsColumn={'newsColumn'}
      news={'newsColumn'}
      footer={'footer'}
    />
  );
}

export default TvPokemon;
