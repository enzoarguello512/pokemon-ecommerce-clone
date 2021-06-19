import React from "react"
import PropTypes from 'prop-types';
import A from './../../Atoms/A/A';
import Image from './../../Atoms/Image/Image';

function Item({item}) {
  return (
    <li className="text-center" style={{width: '23.82813%'}}>
      <A href={item.url}>
        <Image imgClass={item.imgClass} src={item.imgSrc} alt={item.imgAlt} />
      </A>
    </li>
  )
}

Item.propTypes = {
  item: PropTypes.object,
};

export default Item
