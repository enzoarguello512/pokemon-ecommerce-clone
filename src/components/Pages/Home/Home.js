import React from 'react';
import TemplateHome from './../../Templates/TemplateHome/TemplateHome';
import Navbar from './../../Organisms/Navbar/Navbar';
import ItemListContainer from './../../Organisms/ItemListContainer/ItemListContainer';

function Home() {
  return (
    <TemplateHome
      header={<Navbar />}
      mainTitle={'title'}
      filters={'filters controls'}
      filteredItems={<ItemListContainer />}
      slider={'slider'}
      footer={'footer'}
    />
  )
}

export default Home
