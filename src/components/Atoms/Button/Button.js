import React from "react"
import PropTypes from 'prop-types';

require('./Button.css');

function Button({btnClass, type, children, onClick}) {
  return (
    <button
      className={`btn px-4 bg-gradient ${btnClass}`}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  btnClass: "btn-orange text-white",
  type: "button",
}

Button.propTypes = {
  btnClass: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
