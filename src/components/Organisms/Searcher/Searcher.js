import React from "react"
import Input from './../../Atoms/Input/Input';

require('./Searcher.css')

function Searcher() {
  return <>
    <div className="row">
      <div className="col-6">
        <label className="fw-bold fs-2">Nombre o número</label>
        <Input />
        <p>¡Usa la búsqueda avanzada para encontrar Pokémon por su tipo, debilidad, habilidad y demás datos!</p>
      </div>
      <div className="col-6">

      </div>
    </div>
  </>
}

export default Searcher
