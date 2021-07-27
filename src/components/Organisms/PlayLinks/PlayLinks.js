import React from "react"
import A from './../../Atoms/A/A';

require('./PlayLinks.css')

function PlayLinks() {
  return (
    <div className="playlinks me-4 bg-cyan rounded">
      <div className="mx-4 py-3">
        <h4 className="text-white">Enlaces de Play! Pokémon</h4>
      </div>
      <div className="bg-light-gray rounded-bottom">
        <ul className="list-unstyled mb-0">
          <li className="playlinks__items">
            <A aClass="playlinks__link" href="https://www.pokemon.com/el/play-pokemon/eventos-pokemon/torneos-pokemon/">
              <span>Serie de Campeonatos 2022</span>
              <i className="fas fa-chevron-right"></i>
            </A>
          </li>
          <li className="playlinks__items">
            <A aClass="playlinks__link" href="https://www.pokemon.com/el/play-pokemon/listas-de-clasificacion/">
              <span>Lista de clasificación de Play! Pokémon</span>
              <i className="fas fa-chevron-right"></i>
            </A>
          </li>
          <li className="playlinks__items">
            <A aClass="playlinks__link" href="https://www.pokemon.com/el/play-pokemon/sobre/reglas-y-recursos-de-torneos/">
              <span>Reglas y recursos</span>
              <i className="fas fa-chevron-right"></i>
            </A>
          </li>
          <li className="playlinks__items rounded-bottom">
            <A aClass="playlinks__link" href="https://www.pokemon.com/el/play-pokemon/copa-de-jugadores-pokemon-iv/sobre/">
              <span>Copa de Jugadores IV</span>
              <i className="fas fa-chevron-right"></i>
            </A>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PlayLinks
