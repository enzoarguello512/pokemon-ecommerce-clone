import React from "react"
import A from '../../Atoms/A/A';
import Image from '../../Atoms/Image/Image';
import PropTypes from 'prop-types';

require('./Block2.css')

function Block2({mainTitle, bgColorClass, imgSrc, imgAlt, articleHref, colWidth, marginWidth}) {
  return (
    <div className={colWidth}>
      <div className={`block2 ${bgColorClass} ${marginWidth}`}>
        <A href={articleHref}>
          <div className="text-center">
            <Image imgClass="img-fluid rounded-top" src={imgSrc} alt={imgAlt} />
          </div>
          <div className="mx-4">
            <h4 className="text-white m-0 py-3">{mainTitle}</h4>
          </div>
        </A>
      </div>
    </div>
  )
}

Block2.defaultProps = {
  bgColorClass: "bg-success",
};

Block2.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  articleHref: PropTypes.string.isRequired,
  colWidth: PropTypes.string.isRequired,
  marginWidth: PropTypes.string.isRequired,
};

export default Block2
