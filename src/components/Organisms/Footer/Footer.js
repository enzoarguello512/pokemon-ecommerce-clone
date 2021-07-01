import React from "react"

require('./Footer.css')

function Footer() {
  return (
    <footer>
      <div className="footer row p-4">
        <div className="col-4 footer__border-div">
          <h2 className="fs-4 mb-3">The Pokémon Company</h2>
          <ul className="list-unstyled">
            <li className="footer__list-item">
              <a className="footer__list-link text-secondary text-decoration-none" href="https://www.pokemon.com/el/guia-para-padres-tutores/">
                Guía para padres/tutores
              </a>
            </li>
            <li className="footer__list-item">
              <a className="footer__list-link text-secondary text-decoration-none" href="https://www.pokemon.com/el/servicio-de-atencion-al-cliente/">
                Servicio de atención al cliente
              </a>
            </li>
            <li className="footer__list-item">
              <a className="footer__list-link text-secondary text-decoration-none" href="https://www.pokemon.com/el/sobre-pokemon/">
                Sobre nuestra compañía
              </a>
            </li>
            <li className="footer__list-item">
              <a className="footer__list-link text-secondary text-decoration-none" href="https://www.pokemon.com/el/pais-region/">
                Seleccionar país o región
              </a>
            </li>
            <li className="footer__list-item">
              <a className="footer__list-link text-secondary text-decoration-none" href="https://press.pokemon.com/es-MX">
                Pokémon Sitio de Prensa
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4 footer__border-div">

        </div>
        <div className="col-4">

        </div>
      </div>
    </footer>
  )
}

export default Footer
