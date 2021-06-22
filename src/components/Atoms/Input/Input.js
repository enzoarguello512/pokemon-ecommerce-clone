import React from "react"
import PropTypes from 'prop-types';

function Input({inputClass, id, type, ariaLabel, value, onChange}) {
  return (
    <input
      className={inputClass}
      id={id}
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
  inputClass: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func
}

export default Input
