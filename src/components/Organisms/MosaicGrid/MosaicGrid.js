import React from "react"
import Mosaic from "../../Molecules/Mosaic/Mosaic"

require('./MosaicGrid.css')

function MosaicGrid() {
  return (
    <ul className="list-unstyled m-0">
      <Mosaic
        mainTitle="Pokémon Café Mix"
        imgSrc="/images/apps/pokemon-cafe-mix-169.jpg"
        imgAlt="pokemon-cafe-mix"
        articleHref="https://www.pokemon.com/el/app/pokemon-cafe-mix/"
      />
      <Mosaic
        mainTitle="Pokémon Smile"
        imgSrc="/images/apps/pokemon-smile-169.jpg"
        imgAlt="pokemon-smile"
        articleHref="https://www.pokemon.com/el/app/pokemon-smile/"
      />
      <Mosaic
        mainTitle="Pokémon HOME"
        imgSrc="/images/apps/pokemon-home-logo-169.jpg"
        imgAlt="pokemon-home-logo"
        articleHref="https://www.pokemon.com/el/app/pokemon-home/"
      />
      <Mosaic
        mainTitle="Pokémon Rumble Rush"
        imgSrc="/images/apps/pokemon-rumble-rush-169.jpg"
        imgAlt="pokemon-rumble-rush"
        articleHref="https://www.pokemon.com/el/app/pokemon-rumble-rush/"
      />
      <Mosaic
        mainTitle="Pokémon Masters EX"
        imgSrc="/images/apps/pokemon-masters-ex-169.jpg"
        imgAlt="pokemon-masters-ex"
        articleHref="https://www.pokemon.com/el/app/pokemon-masters-ex/"
      />
      <Mosaic
        mainTitle="TV Pokémon para dispositivos móviles"
        imgSrc="/images/apps/pokemon-tv-app-169.jpg"
        imgAlt="pokemon-tv-app"
        articleHref="https://www.pokemon.com/el/app/tv-pokemon/"
      />
      <Mosaic
        mainTitle="CartaDex del Juego de Cartas Coleccionables Pokémon"
        imgSrc="/images/apps/pokemon-tcg-card-dex-169-es.jpg"
        imgAlt="pokemon-tcg-card-dex"
        articleHref="https://www.pokemon.com/el/app/la-aplicacion-cartadex-del-juego-de-cartas-coleccionables-pokemon/"
      />
      <Mosaic
        mainTitle="Pokémon Quest"
        imgSrc="/images/apps/pokemon-quest-169.jpg"
        imgAlt="pokemon-quest"
        articleHref="https://www.pokemon.com/el/app/pokemon-quest/"
      />
      <Mosaic
        mainTitle="Casa de Juegos Pokémon"
        imgSrc="/images/apps/pokemon-playhouse-169-es.jpg"
        imgAlt="pokemon-playhouse"
        articleHref="https://www.pokemon.com/el/app/casa-de-juegos-pokemon/"
      />
      <Mosaic
        mainTitle="Pokémon: Magikarp Jump"
        imgSrc="/images/apps/magikarp-169-es.jpg"
        imgAlt="magikarp"
        articleHref="https://www.pokemon.com/el/app/pokemon-magikarp-jump/"
      />
      <Mosaic
        mainTitle="Pokémon GO"
        imgSrc="/images/apps/pokemon-go-169.jpg"
        imgAlt="pokemon-go"
        articleHref="https://www.pokemon.com/el/app/pokemon-go/"
      />
      <Mosaic
        mainTitle="Pokémon Shuffle Mobile"
        imgSrc="/images/apps/pokemon-shuffle-mobile-launch-169-es.jpg"
        imgAlt="pokemon-shuffle-mobile-launch"
        articleHref="https://www.pokemon.com/el/app/pokemon-shuffle-mobile/"
      />
      <Mosaic
        mainTitle="JCC Pokémon Online"
        imgSrc="/images/apps/tcgo-launch-169-es.jpg"
        imgAlt="tcgo-launch"
        articleHref="https://www.pokemon.com/el/jcc-pokemon/jugar-en-linea/que-es-jcco/"
      />
    </ul>
  )
}

export default MosaicGrid
