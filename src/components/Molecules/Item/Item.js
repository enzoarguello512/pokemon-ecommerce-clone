import React from "react"
import PropTypes from 'prop-types';
import A from './../../Atoms/A/A';
import Image from './../../Atoms/Image/Image';

function Item({item}) {
  return (
    <li className="list-unstyled text-center">
      <A href={item.url}>
        <Image src={item.imgSrc} alt={item.imgAlt} />
      </A>
    </li>
  )
}

Item.propTypes = {
  item: PropTypes.object,
};

export default Item
