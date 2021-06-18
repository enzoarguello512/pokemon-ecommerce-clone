import React from "react"
import CartWidget from "./../CartWidget/CartWidget"
import './Navbar.css';

function Navbar() {
  return <>
    <figure className="text-center main-navbar__figure">
      <img className="main-navbar__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon-logo" />
    </figure>
    <nav className="navbar navbar-expand-lg sticky-top navbar-light main-navbar">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active main-navbar__inicio" aria-current="page" href="#">
                <span className="mx-4">
                  <img className="main-navbar__icon" src="/icons/pikachu-2.svg" alt="inicio-logo" />
                </span>
                <span className="fw-bold">Inicio</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-navbar__pokedex" href="#">
                <span className="mx-4">
                  <img className="main-navbar__icon" src="/icons/pokeball.svg" alt="pokedex-logo" />
                </span>
                <span className="fw-bold">Pokédex</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-navbar__aplicaciones" href="#">
                <span className="mx-4">
                  <img className="main-navbar__icon" src="/icons/smartphone.svg" alt="aplicaciones-logo" />
                </span>
                <span className="fw-bold">Aplicaciones</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-navbar__juego" href="#">
                <span className="mx-4">
                  <img className="main-navbar__icon" src="/icons/backpack.svg" alt="juego-logo" />
                </span>
                <span className="fw-bold">Juego de cartas coleccionables</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-navbar__tv" href="#">
                <span className="mx-4">
                  <img className="main-navbar__icon" src="/icons/new.svg" alt="tv-logo" />
                </span>
                <span className="fw-bold">TV Pokémon</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-navbar__play" href="#">
                <span className="mx-4">
                  <img className="main-navbar__icon" src="/icons/blue-team.svg" alt="play-logo" />
                </span>
                <span className="fw-bold">Play! Pokémon</span>
              </a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  </>
}

//<div>Icons made by <a href="https://www.flaticon.com/authors/roundicons-freebies" title="Roundicons Freebies">Roundicons Freebies</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
//
//

//<li className="nav-item ms-auto d-flex align-items-center">
//<i className="fas fa-shopping-cart fa-fw fs-4 h-pointer"></i>
//</li>
export default Navbar
