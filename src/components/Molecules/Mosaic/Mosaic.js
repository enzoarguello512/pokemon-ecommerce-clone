import React from "react"
import A from '../../Atoms/A/A';
import Image from '../../Atoms/Image/Image';
import PropTypes from 'prop-types';

require('./Mosaic.css')

function Mosaic({mainTitle, imgSrc, imgAlt, articleHref}) {
  return (
    <li className="mosaic">
      <A href={articleHref}>
        <div className="text-center tint-hover-lightblue">
          <Image imgClass="img-fluid rounded-top" src={imgSrc} alt={imgAlt} />
        </div>
        <h5 className="text-dark m-0 pt-4 pb-2">{mainTitle}</h5>
      </A>
    </li>
  )
}

Mosaic.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  articleHref: PropTypes.string.isRequired,
};

export default Mosaic
