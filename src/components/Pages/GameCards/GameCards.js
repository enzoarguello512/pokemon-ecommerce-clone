import React, {useState} from 'react';
import TemplateGameCards from './../../Templates/TemplateGameCards/TemplateGameCards';
import Navbar from './../../Organisms/Navbar/Navbar';
import ItemListContainer from './../../Organisms/ItemListContainer/ItemListContainer';
import ItemCategories from '../../Organisms/ItemCategories/ItemCategories';

const categories = [];

export const categoryContext = React.createContext();

function GameCards() {

  const [activeCategories, setCategory] = useState(categories);



  return (
    <categoryContext.Provider value={categories}>
      <TemplateGameCards
        header={<Navbar />}
        mainTitle={'title'}
        filters={<ItemCategories />}
        filteredItems={<ItemListContainer />}
        slider={'slider'}
        footer={'footer'}
      />
    </categoryContext.Provider>
  )
}

export default GameCards
