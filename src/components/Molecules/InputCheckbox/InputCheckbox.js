import React from "react"
import PropTypes from 'prop-types';
import Input from "../../Atoms/Input/Input";

require('./InputCheckbox.css')

function InputCheckbox({id, children, ...props}) {
  return <>
    <div className="form-check">
      <Input inputClass="form-check-input" type="checkbox" id={id} {...props} />
      <label className="form-check-label" htmlFor={id}>{children}</label>
    </div>
  </>
}

InputCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default InputCheckbox
