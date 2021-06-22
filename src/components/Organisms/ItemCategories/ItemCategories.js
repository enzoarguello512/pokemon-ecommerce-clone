import React from "react"
//import PropTypes from 'prop-types';
import InputCheckbox from "../../Molecules/InputCheckbox/InputCheckbox";
import Button from './../../Atoms/Button/Button';

require('./ItemCategories.css')

function ItemCategories() {
  return <>
    <form className="row g-3 m-auto" style={{backgroundColor: "white"}}>
      <div className="col-12">
        <InputCheckbox id="typeGrass">Type grass</InputCheckbox>
      </div>
      <div className="col-12">
        <InputCheckbox id="typeLightning">Type lightning</InputCheckbox>
      </div>
      <div className="col-12 text-center">
        <Button btnClass="btn-orange text-white w-25" type="submit">
          <i class="fas fa-search"></i>
          <span className="ms-2">Buscar</span>
        </Button>
      </div>
    </form>
  </>
}

//ItemCategories.defaultProps = {
//:
//};

//ItemCategories.propTypes = {
//: PropTypes.
//};

export default ItemCategories
