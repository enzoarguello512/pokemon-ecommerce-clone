import React, {useState, useEffect} from "react"
import Item from './../Item/Item';
//import './ItemList.css';

function ItemList() {

  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const responseJson = await response.json();
      setItems(responseJson);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul className="list-unstyled">
      {items.map(obj => <Item item={obj} />)}
    </ul>
  )
}


export default ItemList
