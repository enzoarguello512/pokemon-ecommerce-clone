import React, {useContext} from 'react';
import TemplateGameCards from './../../Templates/TemplateGameCards/TemplateGameCards';
import Navbar from './../../Organisms/Navbar/Navbar';
import ItemListContainer from './../../Organisms/ItemListContainer/ItemListContainer';
import ItemCategories from '../../Organisms/ItemCategories/ItemCategories';
import {categoriesContext} from './../../Contexts/GameCards/GameCards';
import H1 from './../../Atoms/H1/H1'
import Footer from '../../Organisms/Footer/Footer';
import CardSlider from './../../Molecules/CardSlider/CardSlider';

function GameCards({match}) {

  const [activeCategories] = useContext(categoriesContext);

  return (
    <TemplateGameCards
      header={<Navbar />}
      mainTitle={<H1 titleClass="text-secondary">Base de datos de cartas de JCC</H1>}
      filters={<ItemCategories match={match} />}
      filteredItems={<ItemListContainer categories={activeCategories} />}
      slider={<CardSlider />}
      footer={<Footer />}
    />
  )
}

export default GameCards
