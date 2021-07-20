import React from "react"
import H1 from './../../Atoms/H1/H1';
import {Link} from 'react-router-dom';

require('./Error404Container.css')

function Error404Container() {

  return (
    <div className="bg-white my-5 p-5 text-center rounded">
      <div className="pb-4">
        <span className="fs-20 fw-bold">404</span>
      </div>
      <H1>PÁGINA NO ENCONTRADA</H1>
      <p>Es posible que la página que está buscando se haya eliminado, se cambió el nombre o no está disponible temporalmente</p>
      <div className="pt-4">
        <Link to="/" className="btn px-4 bg-gradient btn-red text-white">Página principal</Link>
      </div>
    </div>
  )
}

export default Error404Container
