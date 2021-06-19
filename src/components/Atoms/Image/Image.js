import React from "react"
import PropTypes from 'prop-types';

require('./Image.css')

function Image({imgClass, src, alt}) {
  return (
    <img className={imgClass} src={src} alt={alt} />
  )
}

Image.defaultProps = {
  imgClass: "",
  alt: "",
};

Image.propTypes = {
  imgClass: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image
