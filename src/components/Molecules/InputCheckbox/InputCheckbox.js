import React from "react"
import PropTypes from 'prop-types';
import Input from "../../Atoms/Input/Input";

require('./InputCheckbox.css')

function InputCheckbox({id, children}) {
  return <>
    <div class="form-check">
      <Input inputClass="form-check-input" type="checkbox" id={id} />
      <label class="form-check-label" htmlFor={id}>{children}</label>
    </div>
  </>
}

InputCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default InputCheckbox
