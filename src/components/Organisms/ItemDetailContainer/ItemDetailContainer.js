import React, {useEffect, useState} from "react"
import PropTypes from 'prop-types';
import ItemDetail from './../ItemDetail/ItemDetail';
import H5 from './../../Atoms/H5/H5';
import {getFirestore} from '../../../firebase';
import Error404Container from './../Error404Container/Error404Container';

const db = getFirestore();

function ItemDetailContainer({match}) {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [renderError, setRenderError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const getDocs = async (category, id) => {
      try {
        const response = await db.collection(category).get();
        const responseData = response.docs.map(doc => doc.data());
        const pokemon = responseData.find(elem => elem.id === id);
        if (pokemon !== undefined && Object.values(pokemon).length > 0) {
          setItem(pokemon);
          setLoading(false);
        } else {
          setRenderError(true);
          setLoading(false);
        }
      }
      catch (error) {
        console.log(error);
        setRenderError(true);
        setLoading(false);
      }
    }

    const selectedCategory = match.url.split('/')[2].replace('type', 'data');
    const selectedId = match.url.split('/')[3];
    getDocs(selectedCategory, parseInt(selectedId));

  }, [match])

  return <>
    <div>
      {loading && !renderError && <H5 titleClass='text-center'>Loading</H5>}
      {!loading && !renderError && <ItemDetail item={item} />}
      {!loading && renderError && <Error404Container />}
    </div>
  </>
}

ItemDetailContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ItemDetailContainer
