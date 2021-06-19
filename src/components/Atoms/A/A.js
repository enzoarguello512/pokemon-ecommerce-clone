import React from "react"
import PropTypes from 'prop-types';

require('./A.css')

function A({href, aClass, children, ariaCurrent}) {
  return (
    <a href={href} className={`text-decoration-none ${aClass}`} aria-current={ariaCurrent}>{children}</a>
  )
}

A.defaultProps = {
  href: "#",
  aClass: "",
  ariaCurrent: "page",
};

A.propTypes = {
  href: PropTypes.string.isRequired,
  aClass: PropTypes.string,
  ariaCurrent: PropTypes.string,
};

export default A
