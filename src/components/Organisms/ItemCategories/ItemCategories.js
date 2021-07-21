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
      case "type-fire":
        setCategory(["data-fire"])
        break;
      case "type-dragon":
        setCategory(["data-dragon"])
        break;
      case "type-fairy":
        setCategory(["data-fairy"])
        break;
      case "type-aqua":
        setCategory(["data-aqua"])
        break;
      default:
        setCategory([])
        break;
    }
  }, [match.url, setCategory])

  return <>
    <div>
      <h1>Categorías</h1>
      <div className="d-flex gap-2">

        <div>
          <Link to="/gamecards/type-grass" className="text-decoration-none" onClick={() => setCategory(["data-grass"])}>
            <Button btnClass="btn-red text-white d-flex flex-column justify-content-center align-items-center">
              <Image imgClass="categories__img--medium" src="/icons/bullbasaur.svg" alt="Tipo planta icono" />
              <span>Tipo planta</span>
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/gamecards/type-lightning" className="text-decoration-none" onClick={() => setCategory(["data-lightning"])}>
            <Button btnClass="btn-red text-white d-flex flex-column justify-content-center align-items-center">
              <Image imgClass="categories__img--medium" src="/icons/pikachu-2.svg" alt="Tipo rayo icono" />
              <span>Tipo rayo</span>
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/gamecards/type-fire" className="text-decoration-none" onClick={() => setCategory(["data-fire"])}>
            <Button btnClass="btn-red text-white d-flex flex-column justify-content-center align-items-center">
              <Image imgClass="categories__img--medium" src="/icons/charmander.svg" alt="Tipo fuego icono" />
              <span>Tipo fuego</span>
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/gamecards/type-dragon" className="text-decoration-none" onClick={() => setCategory(["data-dragon"])}>
            <Button btnClass="btn-red text-white d-flex flex-column justify-content-center align-items-center">
              <Image imgClass="categories__img--medium" src="/icons/dratini.svg" alt="Tipo dragon icono" />
              <span>Tipo dragon</span>
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/gamecards/type-fairy" className="text-decoration-none" onClick={() => setCategory(["data-fairy"])}>
            <Button btnClass="btn-red text-white d-flex flex-column justify-content-center align-items-center">
              <Image imgClass="categories__img--medium" src="/icons/jigglypuff.svg" alt="Tipo hada icono" />
              <span>Tipo hada</span>
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/gamecards/type-aqua" className="text-decoration-none" onClick={() => setCategory(["data-aqua"])}>
            <Button btnClass="btn-red text-white d-flex flex-column justify-content-center align-items-center">
              <Image imgClass="categories__img--medium" src="/icons/squirtle.svg" alt="Tipo agua icono" />
              <span>Tipo agua</span>
            </Button>
          </Link>
        </div>

      </div>
    </div>

    <form className="row g-3 m-auto" onSubmit={e => filterElements(e)}>
      <div className="col-12">
        <h3>Búsqueda custom</h3>
      </div>
      <div className="col-6">
        <InputCheckbox id="typeGrass" ariaLabel="Tipo planta" onChange={e => e.target.checked
          ? addToList("data-grass")
          : removeFromList("data-grass")}>Tipo planta</InputCheckbox>
      </div>
      <div className="col-6">
        <InputCheckbox id="typeLightning" ariaLabel="Tipo rayo" onChange={e => e.target.checked
          ? addToList("data-lightning")
          : removeFromList("data-lightning")}>Tipo rayo</InputCheckbox>
      </div>
      <div className="col-6">
        <InputCheckbox id="typeFire" ariaLabel="Tipo fuego" onChange={e => e.target.checked
          ? addToList("data-fire")
          : removeFromList("data-fire")}>Tipo fuego</InputCheckbox>
      </div>
      <div className="col-6">
        <InputCheckbox id="typeDragon" ariaLabel="Tipo dragon" onChange={e => e.target.checked
          ? addToList("data-dragon")
          : removeFromList("data-dragon")}>Tipo dragon</InputCheckbox>
      </div>
      <div className="col-6">
        <InputCheckbox id="typeFairy" ariaLabel="Tipo hada" onChange={e => e.target.checked
          ? addToList("data-fairy")
          : removeFromList("data-fairy")}>Tipo hada</InputCheckbox>
      </div>
      <div className="col-6">
        <InputCheckbox id="typeAqua" ariaLabel="Tipo agua" onChange={e => e.target.checked
          ? addToList("data-aqua")
          : removeFromList("data-aqua")}>Tipo agua</InputCheckbox>
      </div>
      <div className="col-12 text-center py-4">
        <Button btnClass="btn-orange text-white w-25" type="submit">
          <i className="fas fa-search"></i>
          <span className="ms-2">Buscar</span>
        </Button>
      </div>
    </form>
  </>
}

export default ItemCategories
