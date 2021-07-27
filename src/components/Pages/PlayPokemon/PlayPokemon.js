import React from 'react';
import TemplatePlayPokemon from './../../Templates/TemplatePlayPokemon/TemplatePlayPokemon';
import Navbar from './../../Organisms/Navbar/Navbar';
import Footer from '../../Organisms/Footer/Footer';
import CardSlider from '../../Organisms/CardSlider/CardSlider';
import H1 from './../../Atoms/H1/H1'
import Block3 from '../../Organisms/Block3/Block3';
import Block2 from '../../Molecules/Block2/Block2';
import Block1Left from '../../Molecules/Block1Left/Block1Left';
import PlayLinks from '../../Organisms/PlayLinks/PlayLinks';

function PlayPokemon() {
  return (
    <TemplatePlayPokemon
      header={<Navbar />}
      mainTitle={<H1 titleClass="text-secondary">Play! Pokémon</H1>}
      hero={
        <Block3
          mainTitle={"Información sobre la Serie de Campeonatos de Play! Pokémon 2022"}
          desc="Conoce los planes para la próxima temporada y los criterios de clasificación del Campeonato Mundial Pokémon 2022."
          bgColorClass="bg-purple bg-transition"
          imgSrc="/images/playPokemon/2022-play-pokemon-season-169.jpg"
          imgAlt="2022-play-pokemon-season"
          articleHref="https://www.pokemon.com/el/noticias-pokemon/informacion-sobre-la-serie-de-campeonatos-de-play-pokemon-2022/"
        />
      }
      subHero={
        <>
          <Block2
            mainTitle="Play! Pokémon regresa a Australia y Nueva Zelanda"
            bgColorClass="bg-light-dark bg-transition"
            imgSrc="/images/playPokemon/play-pokemon-169.jpg"
            imgAlt="play-pokemon"
            articleHref="https://www.pokemon.com/el/noticias-pokemon/los-eventos-de-jcc-pokemon-del-programa-play-pokemon-regresan-a-australia-y-nueva-zelanda/"
            colWidth="col-6"
            marginWidth="ms-4"
          />
          <Block2
            mainTitle="Rotación del formato para la temporada 2022 de la Serie de Campeonatos de JCC Pokémon"
            bgColorClass="bg-blue bg-transition"
            imgSrc="/images/playPokemon/2022-tcg-rotation-169-es.jpg"
            imgAlt="2022-tcg-rotation"
            articleHref="https://www.pokemon.com/el/noticias-pokemon/rotacion-del-formato-para-la-temporada-2022-de-la-serie-de-campeonatos-de-jcc-pokemon/"
            colWidth="col-6"
            marginWidth="me-4"
          />
        </>
      }
      newsColumn={
        <>
          <Block2
            mainTitle="Infórmate sobre Play! Pokémon"
            bgColorClass="bg-red bg-transition"
            imgSrc="/images/playPokemon/about_play_pokemon_169.jpg"
            imgAlt="about_play_pokemon"
            articleHref="https://www.pokemon.com/el/play-pokemon/sobre/"
            marginWidth="me-4"
            paddingControl="pt-3 pb-2"
            desc="¡Disfruta compitiendo en eventos Pokémon!"
            descTextColor="text-white"
          />
          <PlayLinks />
          <Block1Left
            mainTitle="Encuentra un evento"
            bgColorClass="bg-yellow bg-transition"
            imgSrc="/images/playPokemon/store-locator-34.jpg"
            imgAlt="store-locator"
            articleHref="https://events.pokemon.com/es-mx/events"
            marginWidth="me-4"
          />
        </>
      }
      slider={<CardSlider />}
      footer={<Footer />}
    />
  )
}

export default PlayPokemon

