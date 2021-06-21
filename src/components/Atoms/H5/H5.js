import React from "react"
import PropTypes from 'prop-types';

require('./H5.css')

function H5({titleClass, children}) {
  return (
    <h5 className={`fw-bold ${titleClass}`}>{children}</h5>
  )
}

H5.defaultProps = {
  titleClass: "",
};

H5.propTypes = {
  titleClass: PropTypes.string,
};

export default H5
