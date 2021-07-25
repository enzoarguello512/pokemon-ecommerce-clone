import React from "react"
import A from '../../Atoms/A/A';
import Image from './../../Atoms/Image/Image';
import PropTypes from 'prop-types';

require('./Block4.css')

function Block4({mainTitle, bgColorClass, imgSrc, imgAlt, articleHref}) {
  return (
    <div className={`block4 ${bgColorClass}`}>
      <A href={articleHref}>
        <div className="text-center">
          <Image imgClass="img-fluid rounded-top w-100" src={imgSrc} alt={imgAlt} />
        </div>
        <div className="mx-4">
          <h4 className="text-white m-0 py-4">{mainTitle}</h4>
        </div>
      </A>
    </div>
  )
}

Block4.defaultProps = {
  bgColorClass: "bg-danger",
};

Block4.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  articleHref: PropTypes.string.isRequired,
};

export default Block4
