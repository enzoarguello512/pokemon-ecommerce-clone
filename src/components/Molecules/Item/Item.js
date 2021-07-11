import React from "react"
import PropTypes from 'prop-types';
import Image from './../../Atoms/Image/Image';
import {Link} from 'react-router-dom';

require('./Item.css');

function Item({item}) {
  return (
    <li className="text-center my-2 list-item" style={{width: '23.82813%'}}>
      <Link className="text-decoration-none list-item__link" to={`/gamecards/${item.url.split('/')[2]}/${item.id}`}>
        <h5 className="fw-bold">{item.name}</h5>
        <Image imgClass={item.imgClass} src={item.imgSrc} alt={item.imgAlt} />
      </Link>
    </li>
  )
}

Item.propTypes = {
  item: PropTypes.object,
};

export default Item
