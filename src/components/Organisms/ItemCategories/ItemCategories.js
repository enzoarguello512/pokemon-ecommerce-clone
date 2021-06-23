import React, {useState, useContext} from "react"
import InputCheckbox from "../../Molecules/InputCheckbox/InputCheckbox";
import Button from './../../Atoms/Button/Button';
import {pokemonsGrass} from './../../../json-data-grass';
import {pokemonsLightning} from './../../../json-data-lightning';
import {categoryContext} from './../../Pages/GameCards/GameCards';

require('./ItemCategories.css')

function ItemCategories() {

  const [form, setForm] = useState([]);

  const context = useContext(categoryContext);

  const grassUrl = pokemonsGrass;
  const lightningUrl = pokemonsLightning;

  const addToList = value => {
    setForm([...value, ...form])
  }

  const removeFromList = value => {
    setForm(form.filter(elem => !value.includes(elem)));
  }

  const filterElements = e => {
    e.preventDefault();
    context.setCategory(form);
  }

  return <>
    <form className="row g-3 m-auto" style={{backgroundColor: "white"}} onSubmit={e => filterElements(e)}>
      <div className="col-12">
        <InputCheckbox id="typeGrass" ariaLabel="Tipo planta" onChange={e => e.target.checked ? addToList(grassUrl) : removeFromList(grassUrl)}>Tipo planta</InputCheckbox>
      </div>
      <div className="col-12">
        <InputCheckbox id="typeLightning" ariaLabel="Tipo rayo" onChange={e => e.target.checked ? addToList(lightningUrl) : removeFromList(lightningUrl)}>Tipo rayo</InputCheckbox>
      </div>
      <div className="col-12 text-center">
        <Button btnClass="btn-orange text-white w-25" type="submit">
          <i className="fas fa-search"></i>
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
