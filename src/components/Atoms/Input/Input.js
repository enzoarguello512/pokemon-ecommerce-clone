import React from "react"
import PropTypes from 'prop-types';

function Input({textAlign, type, ariaLabel, value, onChange}) {
  return (
    <input
      className={`form-control ${textAlign}`}
      type={type}
      aria-label={ariaLabel}
      value={value}
      onChange={onChange} />
  )
}

Input.defaultProps = {
  type: "text",
}

Input.propTypes = {
  textAlign: PropTypes.string,
  type: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func
}

export default Input
