import React from 'react';
import TemplateTvPokemon from '../../Templates/TemplateTvPokemon/TemplateTvPokemon';
import Navbar from './../../Organisms/Navbar/Navbar';
import Footer from '../../Organisms/Footer/Footer';

function TvPokemon() {
  return (
    <TemplateTvPokemon
      header={<Navbar />}
      mainTitle={'mainTitle'}
      hero={'hero'}
      newsColumn={'newsColumn'}
      news={'newsColumn'}
      footer={<Footer />}
    />
  );
}

export default TvPokemon;
