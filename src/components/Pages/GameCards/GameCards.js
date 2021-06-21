import React from 'react';
import TemplateGameCards from './../../Templates/TemplateGameCards/TemplateGameCards';
import Navbar from './../../Organisms/Navbar/Navbar';
import ItemListContainer from './../../Organisms/ItemListContainer/ItemListContainer';

function GameCards() {
  return (
    <TemplateGameCards
      header={<Navbar />}
      mainTitle={'title'}
      filters={'filters controls'}
      filteredItems={<ItemListContainer />}
      slider={'slider'}
      footer={'footer'}
    />
  )
}

export default GameCards
