import React from "react"
import PropTypes from 'prop-types';
import Image from './../../Atoms/Image/Image';
import {Link} from 'react-router-dom';

function Item({item}) {
  return (
    <li className="text-center" style={{width: '23.82813%'}}>
      <Link to={`/gamecards/${item.url.split('/')[2]}/${item.id}`}>
        <h5 className="text-dark fw-bold text-decoration-underline">{item.name}</h5>
        <Image imgClass={item.imgClass} src={item.imgSrc} alt={item.imgAlt} />
      </Link>
    </li>
  )
}

Item.propTypes = {
  item: PropTypes.object,
};

export default Item
