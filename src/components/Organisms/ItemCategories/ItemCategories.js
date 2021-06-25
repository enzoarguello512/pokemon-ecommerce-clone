import React, {useState, useContext, useEffect} from "react"
import InputCheckbox from "../../Molecules/InputCheckbox/InputCheckbox";
import Button from './../../Atoms/Button/Button';
import {pokemonsGrass} from './../../../json-data-grass';
import {pokemonsLightning} from './../../../json-data-lightning';
import {categoriesContext} from './../../Contexts/GameCards/GameCards';
import {Link} from 'react-router-dom';

require('./ItemCategories.css')

function ItemCategories({match}) {

  //LOCAL STATE
  const [form, setForm] = useState([]);

  //CONTEXT
  const [, setCategory] = useContext(categoriesContext);

  //API's
  const grassUrl = pokemonsGrass;
  const lightningUrl = pokemonsLightning;

  //FUNCTIONS
  const addToList = value => {
    setForm([...value, ...form])
  }

  const removeFromList = value => {
    setForm(form.filter(elem => !value.includes(elem)));
  }

  const filterElements = e => {
    e.preventDefault();
    setCategory(form);
  }

  useEffect(() => {
    const category = match.url.split('/').pop();
    switch (category) {
      case "type-grass":
        setCategory(grassUrl)
        break;
      case "type-lightning":
        setCategory(lightningUrl)
        break;
      default:
        break;
    }
  })

  return <>

    <div style={{backgroundColor: "yellow"}}>
      <h1>Categories</h1>
      <div className="d-grid gap-2">
        <div>
          <Link to="/gamecards/type-grass">
            <Button btnClass="btn-red text-white">Tipo planta</Button>
          </Link>
        </div>
        <div>
          <Link to="/gamecards/type-lightning">
            <Button btnClass="btn-red text-white">Tipo rayo</Button>
          </Link>
        </div>
      </div>
    </div>

    <form className="row g-3 m-auto" style={{backgroundColor: "white"}} onSubmit={e => filterElements(e)}>
      <div className="col-12">
        <h3>Custom search (only works in <Link to="/gamecards">/gamecards</Link>)</h3>
      </div>
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

export default ItemCategories
