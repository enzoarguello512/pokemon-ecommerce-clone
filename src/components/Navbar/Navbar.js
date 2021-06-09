import React, {useState} from "react"
import CartWidget from "./../CartWidget/CartWidget"
import './Navbar.css';

import pikachu from './../../icons/pikachu-2.svg';

function Navbar() {
  return <>
    <figure className="text-center main-navbar__figure">
      <img className="main-navbar__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon-logo" />
    </figure>
    <nav class="navbar navbar-expand-lg sticky-top navbar-light main-navbar">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li class="nav-item">
              <a class="nav-link active main-navbar__inicio" aria-current="page" href="#">
                <span className="mx-4">
                  <img className="main-navbar__icon" src={pikachu} alt="pikachu" />
                </span>
                <span className="fw-bold">Inicio</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pokédex</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Aplicaciones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Juego de cartas coleccionables</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">TV Pokémon</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Play! Pokémon</a>
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
//<i class="fas fa-shopping-cart fa-fw fs-4 h-pointer"></i>
//</li>
export default Navbar
