import React, {useState, useEffect} from "react"
import Item from './../Item/Item';
//import './ItemList.css';

function ItemList({url}) {

  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      setItems(responseJson.results);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    //fetchData()

  });

  return (
    <ul className="list-unstyled">
      <Item name={'asd'} />
    </ul>
    //<ul className="list-unstyled">
    //{items.map(obj => <Item name={obj.name} />)}
    //</ul>
  )
}

export default ItemList
