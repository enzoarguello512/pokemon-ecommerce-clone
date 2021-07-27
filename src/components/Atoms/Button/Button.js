import React from "react"
import PropTypes from 'prop-types';

require('./Button.css');

function Button({btnClass, type, children, onClick, disabled, }) {
  return (
    <button
      className={`btn px-4 bg-gradient ${btnClass}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  btnClass: "btn-orange text-white",
  type: "button",
  disabled: false,
}

Button.propTypes = {
  btnClass: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Button
