import React from "react"
import A from '../../Atoms/A/A';
import Image from '../../Atoms/Image/Image';
import PropTypes from 'prop-types';

require('./Block2.css')

function Block2({mainTitle, desc, bgColorClass, imgSrc, imgAlt, articleHref, colWidth, marginWidth, paddingControl, descTextColor}) {
  return (
    <div className={colWidth}>
      <div className={`block2 ${bgColorClass} ${marginWidth}`}>
        <A href={articleHref}>
          <div className="text-center">
            <Image imgClass="img-fluid rounded-top" src={imgSrc} alt={imgAlt} />
          </div>
          <div className="mx-4">
            <h4 className={`text-white m-0 ${paddingControl}`}>{mainTitle}</h4>
            {desc !== ""
              ? <p className={`block3__desc ${descTextColor}`}>{desc}</p>
              : null}
          </div>
        </A>
      </div>
    </div>
  )
}

Block2.defaultProps = {
  bgColorClass: "bg-success",
  desc: "",
  colWidth: "",
  marginWidth: "",
  paddingControl: "py-3",
  descTextColor: "",
};

Block2.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  desc: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  articleHref: PropTypes.string.isRequired,
  colWidth: PropTypes.string,
  marginWidth: PropTypes.string,
  paddingControl: PropTypes.string,
  descTextColor: PropTypes.string,
};

export default Block2
