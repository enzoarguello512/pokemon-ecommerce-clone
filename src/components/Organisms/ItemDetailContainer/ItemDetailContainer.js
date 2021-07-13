import React, {useEffect, useState} from "react"
import PropTypes from 'prop-types';
import ItemDetail from './../ItemDetail/ItemDetail';
import H5 from './../../Atoms/H5/H5';
import {getFirestore} from './../../../firebase';

const db = getFirestore();

function ItemDetailContainer({match}) {

  const [item, setItem] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);

    const getDocs = async (category, id) => {
      try {
        const response = await db.collection(category).get();
        const responseData = response.docs.map(doc => doc.data());
        const pokemon = responseData.find(elem => elem.id === id);
        setItem(pokemon);
      }
      catch (error) {
        console.log(error);
      }
    }

    const selectedCategory = match.url.split('/')[2].replace('type', 'data');
    const selectedId = match.url.split('/')[3];
    getDocs(selectedCategory, parseInt(selectedId));

  }, [match])

  return <>
    <div className="">
      {Object.values(item).length > 0 ? <ItemDetail item={item} /> : <H5 titleClass='text-center'>Loading</H5>}
    </div>
  </>
}

ItemDetailContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ItemDetailContainer
