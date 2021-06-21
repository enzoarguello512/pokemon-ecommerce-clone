import React from "react"
import CartWidget from "../../Atoms/CartWidget/CartWidget";
import A from "../../Atoms/A/A";
import Image from "../../Atoms/Image/Image";

require('./Navbar.css');

function Navbar() {
  return <>
    <figure className="text-center main-navbar__figure">
      <Image imgClass="main-navbar__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon-logo" />
    </figure>
    <nav className="navbar navbar-expand-lg sticky-top navbar-light main-navbar">
      <div className="container-xxl">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">

            <li className="nav-item">
              <A aClass="nav-link active main-navbar__inicio">
                <span className="mx-4">
                  <Image imgClass="main-navbar__icon" src="/icons/pikachu-2.svg" alt="inicio-logo" />
                </span>
                <span className="fw-bold">Inicio</span>
              </A>
            </li>

            <li className="nav-item">
              <A aClass="nav-link main-navbar__pokedex">
                <span className="mx-4">
                  <Image imgClass="main-navbar__icon" src="/icons/pokeball.svg" alt="pokedex-logo" />
                </span>
                <span className="fw-bold">Pokédex</span>
              </A>
            </li>

            <li className="nav-item">
              <A aClass="nav-link main-navbar__aplicaciones">
                <span className="mx-4">
                  <Image imgClass="main-navbar__icon" src="/icons/smartphone.svg" alt="aplicaciones-logo" />
                </span>
                <span className="fw-bold">Aplicaciones</span>
              </A>
            </li>

            <li className="nav-item">
              <A aClass="nav-link main-navbar__juego">
                <span className="mx-4">
                  <Image imgClass="main-navbar__icon" src="/icons/backpack.svg" alt="juego-logo" />
                </span>
                <span className="fw-bold">Juego de cartas coleccionables</span>
              </A>
            </li>

            <li className="nav-item">
              <A aClass="nav-link main-navbar__tv">
                <span className="mx-4">
                  <Image imgClass="main-navbar__icon" src="/icons/new.svg" alt="tv-logo" />
                </span>
                <span className="fw-bold">TV Pokémon</span>
              </A>
            </li>

            <li className="nav-item">
              <A aClass="nav-link main-navbar__play">
                <span className="mx-4">
                  <Image imgClass="main-navbar__icon" src="/icons/blue-team.svg" alt="play-logo" />
                </span>
                <span className="fw-bold">Play! Pokémon</span>
              </A>
            </li>

          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  </>
}

//<div>Icons made by <a href="https://www.flaticon.com/authors/roundicons-freebies" title="Roundicons Freebies">Roundicons Freebies</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default Navbar
