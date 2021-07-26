import React from "react"
import Button from './../../Atoms/Button/Button';
import PokedexItem from "../../Molecules/PokedexItem/PokedexItem"

require('./PokedexMosaic.css')

function PokedexMosaic() {
  return <>
    <ul className="list-unstyled">
      <PokedexItem
        mainTitle="Bulbasaur"
        imgSrc="/images/pokedex/001.png"
        articleHref="https://www.pokemon.com/el/pokedex/bulbasaur"
        tags={["Planta", "Veneno"]}
        itemNumber="001"
      />
      <PokedexItem
        mainTitle="Ivysaur"
        imgSrc="/images/pokedex/002.png"
        articleHref="https://www.pokemon.com/el/pokedex/ivysaur"
        tags={["Planta", "Veneno"]}
        itemNumber="002"
      />
      <PokedexItem
        mainTitle="Venusaur"
        imgSrc="/images/pokedex/003.png"
        articleHref="https://www.pokemon.com/el/pokedex/venusaur"
        tags={["Planta", "Veneno"]}
        itemNumber="003"
      />
      <PokedexItem
        mainTitle="Charmander"
        imgSrc="/images/pokedex/004.png"
        articleHref="https://www.pokemon.com/el/pokedex/charmander"
        tags={["Fuego"]}
        itemNumber="004"
      />
      <PokedexItem
        mainTitle="Charmeleon"
        imgSrc="/images/pokedex/005.png"
        articleHref="https://www.pokemon.com/el/pokedex/charmeleon"
        tags={["Fuego"]}
        itemNumber="005"
      />
      <PokedexItem
        mainTitle="Charizard"
        imgSrc="/images/pokedex/006.png"
        articleHref="https://www.pokemon.com/el/pokedex/charizard"
        tags={["Fuego", "Volador"]}
        itemNumber="006"
      />
      <PokedexItem
        mainTitle="Squirtle"
        imgSrc="/images/pokedex/007.png"
        articleHref="https://www.pokemon.com/el/pokedex/squirtle"
        tags={["Agua"]}
        itemNumber="007"
      />
      <PokedexItem
        mainTitle="Wartortle"
        imgSrc="/images/pokedex/008.png"
        articleHref="https://www.pokemon.com/el/pokedex/wartortle"
        tags={["Agua"]}
        itemNumber="008"
      />
      <PokedexItem
        mainTitle="Blastoise"
        imgSrc="/images/pokedex/009.png"
        articleHref="https://www.pokemon.com/el/pokedex/blastoise"
        tags={["Agua"]}
        itemNumber="009"
      />
      <PokedexItem
        mainTitle="Caterpie"
        imgSrc="/images/pokedex/010.png"
        articleHref="https://www.pokemon.com/el/pokedex/caterpie"
        tags={["Bicho"]}
        itemNumber="010"
      />
      <PokedexItem
        mainTitle="Metapod"
        imgSrc="/images/pokedex/011.png"
        articleHref="https://www.pokemon.com/el/pokedex/metapod"
        tags={["Bicho"]}
        itemNumber="011"
      />
      <PokedexItem
        mainTitle="Butterfree"
        imgSrc="/images/pokedex/012.png"
        articleHref="https://www.pokemon.com/el/pokedex/butterfree"
        tags={["Bicho", "Volador"]}
        itemNumber="012"
      />
    </ul>
    <div className="text-center">
      <Button btnClass="btn-cyan text-white">Cargar más Pokémon</Button>
    </div>
  </>
}

export default PokedexMosaic
