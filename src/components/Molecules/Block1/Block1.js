import React from "react"
import A from '../../Atoms/A/A';
import Image from '../../Atoms/Image/Image';
import PropTypes from 'prop-types';

require('./Block1.css')

function Block1({mainTitle, bgColorClass, imgSrc, imgAlt, articleHref, colWidth, marginWidth}) {
  return (
    <div className={colWidth}>
      <div className={`block1 ${bgColorClass} ${marginWidth}`}>
        <A href={articleHref}>
          <div className="d-flex">
            <Image imgClass="img-fluid block1__img" src={imgSrc} alt={imgAlt} />
            <div className="mx-4">
              <h4 className="text-white m-0 py-3">{mainTitle}</h4>
            </div>
          </div>
        </A>
      </div>
    </div>
  )
}

Block1.defaultProps = {
  bgColorClass: "bg-info",
  colWidth: "",
  marginWidth: "",
};

Block1.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  articleHref: PropTypes.string.isRequired,
  colWidth: PropTypes.string,
  marginWidth: PropTypes.string,
};

export default Block1
