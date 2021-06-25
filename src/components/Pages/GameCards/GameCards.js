import React, {useContext} from 'react';
import TemplateGameCards from './../../Templates/TemplateGameCards/TemplateGameCards';
import Navbar from './../../Organisms/Navbar/Navbar';
import ItemListContainer from './../../Organisms/ItemListContainer/ItemListContainer';
import ItemCategories from '../../Organisms/ItemCategories/ItemCategories';
import {categoriesContext} from './../../Contexts/GameCards/GameCards';

function GameCards({match}) {

  const [activeCategories] = useContext(categoriesContext);

  return (
    <TemplateGameCards
      header={<Navbar />}
      mainTitle={'title'}
      filters={<ItemCategories match={match} />}
      filteredItems={<ItemListContainer categories={activeCategories} />}
      slider={'slider'}
      footer={'footer'}
    />
  )
}

export default GameCards
