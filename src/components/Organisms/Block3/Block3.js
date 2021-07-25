import React from "react"
import A from '../../Atoms/A/A';
import Image from './../../Atoms/Image/Image';
import PropTypes from 'prop-types';

require('./Block3.css')

function Block3({mainTitle, desc, bgColorClass, imgSrc, imgAlt, articleHref}) {
  return (
    <div className={`block3 ${bgColorClass}`}>
      <A href={articleHref}>
        <div className="text-center">
          <Image imgClass="img-fluid rounded-top" src={imgSrc} alt={imgAlt} />
        </div>
        <div className="mx-4">
          <h4 className="text-white m-0 pt-4 pb-2">{mainTitle}</h4>
          <p className="block3__desc">{desc}</p>
        </div>
      </A>
    </div>
  )
}

Block3.defaultProps = {
  bgColorClass: "bg-primary",
};

Block3.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  articleHref: PropTypes.string.isRequired,
};

export default Block3
