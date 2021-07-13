import React from 'react';
import TemplatePlayPokemon from './../../Templates/TemplatePlayPokemon/TemplatePlayPokemon';
import Navbar from './../../Organisms/Navbar/Navbar';
import Footer from '../../Organisms/Footer/Footer';
import CardSlider from '../../Organisms/CardSlider/CardSlider';

function PlayPokemon() {
  return (
    <TemplatePlayPokemon
      header={<Navbar />}
      mainTitle={'mainTitle'}
      hero={'hero'}
      subHero={'subHero'}
      newsColumn={'newsColumn'}
      slider={<CardSlider />}
      footer={<Footer />}
    />
  )
}

export default PlayPokemon

