import React, {useState, useEffect} from "react"
import PropTypes from 'prop-types';
import Item from './../../Molecules/Item/Item';

require('./ItemList.css');

function ItemList({urlPokemonType}) {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlPokemonType);
        const responseJson = await response.json();
        setItems(responseJson);
      }
      catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [urlPokemonType]);

  return (
    <ul className="list-unstyled d-flex flex-wrap justify-content-evenly mx-auto" style={{width: 1024}}>
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
      <Item item={{url: "asd", imgAlt: "asd", imgSrc: '/images/BWP_ES_BW01.png', imgClass: 'img-fluid'}} />
    </ul>
  )
}

//{items && items.length > 0 ? items.map(obj => <Item item={obj} />) : "Items not found"}
ItemList.propTypes = {
  urlPokemonType: PropTypes.string.isRequired,
};

export default ItemList
