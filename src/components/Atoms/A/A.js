import React from "react"
import PropTypes from 'prop-types';

require('./A.css')

function A({href, aClass, children}) {
  return (
    <a href={href} className={`text-decoration-none ${aClass}`}>{children}</a>
  )
}

A.defaultProps = {
  href: "#",
  aClass: "",
};

A.propTypes = {
  href: PropTypes.string.isRequired,
  aClass: PropTypes.string,
};

export default A
