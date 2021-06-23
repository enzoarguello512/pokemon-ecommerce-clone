import React, {useState} from 'react';
import TemplateGameCards from './../../Templates/TemplateGameCards/TemplateGameCards';
import Navbar from './../../Organisms/Navbar/Navbar';
import ItemListContainer from './../../Organisms/ItemListContainer/ItemListContainer';
import ItemCategories from '../../Organisms/ItemCategories/ItemCategories';

export const categoryContext = React.createContext();

function GameCards() {

  const [activeCategories, setCategory] = useState([]);

  console.log(activeCategories);

  return (
    <categoryContext.Provider value={{activeCategories, setCategory}}>
      <TemplateGameCards
        header={<Navbar />}
        mainTitle={'title'}
        filters={<ItemCategories />}
        filteredItems={<ItemListContainer categories={activeCategories} />}
        slider={'slider'}
        footer={'footer'}
      />
    </categoryContext.Provider>
  )
}

export default GameCards
