import React from "react"
import TemplateGameCardId from "../../Templates/TemplateGameCardId/TemplateGameCardId";
import Navbar from './../../Organisms/Navbar/Navbar';
import ItemDetailContainer from './../../Organisms/ItemDetailContainer/ItemDetailContainer';

function GameCardId({match}) {
  return (
    <TemplateGameCardId
      header={<Navbar />}
      cardDetail={<ItemDetailContainer match={match} />}
      slider={'slider'}
      footer={'footer'}
    />
  )
}

export default GameCardId
