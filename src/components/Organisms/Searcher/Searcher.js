import React from "react"
import Input from './../../Atoms/Input/Input';
import Button from './../../Atoms/Button/Button';

require('./Searcher.css')

function Searcher() {
  return <>
    <div className="row">
      <div className="col-6">
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="searchPokedex" className="fs-2">Nombre o número</label>
          <div className="d-flex justify-content-between mb-2">
            <Input inputClass="form-control w-75" id="searchPokedex" ariaLabel="searcher" />
            <Button btnClass="btn-orange text-white" type="submit">
              <i className="fas fa-search"></i>
            </Button>
          </div>
        </form>
        <p className="fw-bold">¡Usa la búsqueda avanzada para encontrar Pokémon por su tipo, debilidad, habilidad y demás datos!</p>
      </div>
      <div className="col-6">
        <div className="block3 bg-light-green bg-transition">
          <div className="py-3 px-4 mt-4 fs-5">
            Busca un Pokémon por su nombre o usando su número de la Pokédex Nacional.
          </div>
        </div>
      </div>
    </div>
  </>
}
//<Input />

export default Searcher
