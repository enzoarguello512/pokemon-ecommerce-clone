import React from 'react';
import TemplatePlayPokemon from './../../Templates/TemplatePlayPokemon/TemplatePlayPokemon';
import Navbar from './../../Organisms/Navbar/Navbar';

function PlayPokemon() {
  return (
    <TemplatePlayPokemon
      header={<Navbar />}
      mainTitle={'mainTitle'}
      hero={'hero'}
      subHero={'subHero'}
      newsColumn={'newsColumn'}
      slider={'slider'}
      footer={'footer'}
    />
  )
}

export default PlayPokemon

