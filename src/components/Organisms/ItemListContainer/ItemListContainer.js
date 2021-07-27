import React, {useEffect, useContext} from "react"
import ItemList from "../ItemList/ItemList";
import {categoriesContext} from '../../Contexts/GameCards/GameCards';

require('./ItemListContainer.css');

function ItemListContainer({categories}) {

  //CONTEXT
  const [, setCategory] = useContext(categoriesContext);

  useEffect(() => {
    return () => setCategory([]);
  }, [setCategory]);

  return <>
    <div className="list-container">
      <ItemList categories={categories}/>
    </div>
  </>;
}

export default ItemListContainer
