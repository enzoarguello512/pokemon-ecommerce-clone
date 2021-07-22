import React from 'react';
import TemplateGameCards from './../../Templates/TemplateGameCards/TemplateGameCards';
import Navbar from './../../Organisms/Navbar/Navbar';
import ItemCategories from '../../Organisms/ItemCategories/ItemCategories';
import H1 from './../../Atoms/H1/H1'
import Footer from '../../Organisms/Footer/Footer';
import CardSlider from './../../Organisms/CardSlider/CardSlider';

function GameCards({match}) {

  return (
    <TemplateGameCards
      header={<Navbar />}
      mainTitle={<H1 titleClass="text-secondary">Base de datos de cartas de JCC</H1>}
      filters={<ItemCategories match={match} />}
      slider={<CardSlider />}
      footer={<Footer />}
    />
  )
}

export default GameCards
