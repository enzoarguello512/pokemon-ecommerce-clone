import React, {useState, useContext, useEffect} from "react"
import InputCheckbox from "../../Molecules/InputCheckbox/InputCheckbox";
import Button from './../../Atoms/Button/Button';
import {categoriesContext} from './../../Contexts/GameCards/GameCards';
import {Link} from 'react-router-dom';
import Image from "../../Atoms/Image/Image";

require('./ItemCategories.css')

function ItemCategories({match}) {

  //LOCAL STATE
  const [form, setForm] = useState([]);

  //CONTEXT
  const [, setCategory] = useContext(categoriesContext);

  //FUNCTIONS
  const addToList = value => {
    setForm([value, ...form])
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
        setCategory(["data-grass"])
        break;
      case "type-lightning":
        setCategory(["data-lightning"])
        break;
      default:
        break;
    }
  }, [match.url, setCategory])

  return <>
    <div>
      <h1>Categorías</h1>
      <div className="d-flex gap-2">

        <div>
          <Link to="/gamecards/type-grass" className="text-decoration-none">
            <Button btnClass="btn-red text-white d-flex flex-column justify-content-center align-items-center">
              <Image imgClass="categories__img--medium" src="/icons/bullbasaur.svg" alt="Tipo planta icono" />
              <span>Tipo planta</span>
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/gamecards/type-lightning" className="text-decoration-none">
            <Button btnClass="btn-red text-white d-flex flex-column justify-content-center align-items-center">
              <Image imgClass="categories__img--medium" src="/icons/pikachu-2.svg" alt="Tipo rayo icono" />
              <span>Tipo rayo</span>
            </Button>
          </Link>
        </div>

      </div>
    </div>

    <form className="row g-3 m-auto" onSubmit={e => filterElements(e)}>
      <div className="col-12">
        <h3>Búsqueda custom</h3>
      </div>
      <div className="col-12">
        <InputCheckbox id="typeGrass" ariaLabel="Tipo planta" onChange={e => e.target.checked
          ? addToList("data-grass")
          : removeFromList("data-grass")}>Tipo planta</InputCheckbox>
      </div>
      <div className="col-12">
        <InputCheckbox id="typeLightning" ariaLabel="Tipo rayo" onChange={e => e.target.checked
          ? addToList("data-lightning")
          : removeFromList("data-lightning")}>Tipo rayo</InputCheckbox>
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
