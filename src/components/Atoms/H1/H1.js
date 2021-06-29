import React from "react"
import PropTypes from 'prop-types';

require('./H1.css')

function H1({titleClass, children}) {
  return (
    <h5 className={`fw-bold fs-2 ${titleClass}`}>{children}</h5>
  )
}

H1.defaultProps = {
  titleClass: "",
};

H1.propTypes = {
  titleClass: PropTypes.string,
};

export default H1
