import React, {useState, useEffect} from "react"
import PropTypes from 'prop-types';
import Item from './../../Molecules/Item/Item';
import H5 from './../../Atoms/H5/H5';
import {getFirestore} from './../../../firebase';

require('./ItemList.css');

const db = getFirestore();

function ItemList({categories}) {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [renderError, setRenderError] = useState(false);

  useEffect(() => {

    let localData = [];

    if (categories.length > 0) {

      const getDocs = async (category) => {
        try {
          const response = await db.collection(category).get();
          const responseData = response.docs.map(doc => doc.data());
          localData = [...responseData, ...localData]
          setItems(localData);
          setLoading(false)
        }
        catch (error) {
          console.log(error);
          setRenderError(true);
        }
      }

      categories.forEach(category => getDocs(category));

    }

  }, [categories])

  return (
    <ul className="list-unstyled d-flex flex-wrap justify-content-evenly mx-auto">
      {loading && <H5 titleClass='text-center'>Loading</H5>}
      {items && items.length > 0 && (items.sort((obj1, obj2) => obj1.cardNumber - obj2.cardNumber).map(obj => <Item item={obj} key={obj.id} />))}
      {renderError && !loading && <H5 titleClass='text-center bg-danger text-white py-2 rounded'>No se puede conectar con el servidor en estos momentos, puede intentarlo más tarde, disculpe las molestias :(</H5>}
    </ul>
  )
}

ItemList.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default ItemList
