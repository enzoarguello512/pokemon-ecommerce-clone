import React from "react"
import PropTypes from 'prop-types';

require('./Button.css');

function Button({bgColor, textColor, children, onClick}) {
  return (
    <button
      className={`btn px-4 bg-gradient ${bgColor} ${textColor}`}
      type="button"
      onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  bgColor: "btn-orange",
  textColor: "text-white",
}

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button
