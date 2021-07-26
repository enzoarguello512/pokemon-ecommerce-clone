import React from 'react';
import TemplateTvPokemon from '../../Templates/TemplateTvPokemon/TemplateTvPokemon';
import Navbar from './../../Organisms/Navbar/Navbar';
import Footer from '../../Organisms/Footer/Footer';
import H1 from './../../Atoms/H1/H1'
import Block3 from '../../Organisms/Block3/Block3';
import Block2 from '../../Molecules/Block2/Block2';
import Block1 from '../../Molecules/Block1/Block1';
import Block1Left from '../../Molecules/Block1Left/Block1Left';

function TvPokemon() {
  return (
    <TemplateTvPokemon
      header={<Navbar />}
      mainTitle={<H1 titleClass="text-secondary">TV Pokémon</H1>}
      hero={
        <Block3
          mainTitle="Asombrosas proezas deportivas en TV Pokémon"
          desc="Disfruta de los Juegos de Verano con las potentes y veloces proezas que los Pokémon exhiben en una selección de episodios de la serie Pokémon."
          bgColorClass="bg-light-green bg-transition"
          imgSrc="/images/tvPokemon/sports-169-es.png"
          imgAlt="sports"
          articleHref="https://watch.pokemon.com/es-xl/#/season?id=velocidad-fortaleza-y-espiritu"
        />
      }
      newsColumn={
        <>
          <Block1
            mainTitle="¡Ve TV Pokémon ahora!"
            bgColorClass="bg-aqua bg-transition"
            imgSrc="/images/tvPokemon/watch-pokemon-tv-34.jpg"
            imgAlt="watch-pokemon-tv"
            articleHref="https://watch.pokemon.com/es-xl/"
            marginWidth="me-4"
          />
          <Block2
            mainTitle="¡No te pierdas los nuevos episodios en Cartoon Network Latinoamérica!"
            bgColorClass="bg-light-purple bg-transition"
            imgSrc="/images/tvPokemon/season23-cartoon-network-169.png"
            imgAlt="season23-cartoon-network"
            articleHref="https://spa.cartoonnetworkla.com/html/splashPage/index.html"
            marginWidth="me-4"
          />
        </>
      }
      news={
        <>
          <Block1
            mainTitle="Episodios de la serie Pokémon"
            bgColorClass="bg-gray-2 bg-transition"
            imgSrc="/images/tvPokemon/season-encylopedia-11.jpg"
            imgAlt="season-encylopedia"
            articleHref="https://www.pokemon.com/el/episodios-pokemon/temporadas-de-tv-pokemon/"
            colWidth="col-6"
            marginWidth="ms-4"
          />
          <Block1Left
            mainTitle="TV Pokémon: Pokémon de Sinnoh"
            bgColorClass="bg-blue bg-transition"
            imgSrc="/images/tvPokemon/movie-21-trailer-11-es.jpg"
            imgAlt="movie-21-trailer"
            articleHref="https://www.pokemon.com/el/episodios-pokemon/peliculas-pokemon/"
            colWidth="col-6"
            marginWidth="me-4"
          />
        </>
      }
      footer={<Footer />}
    />
  );
}

export default TvPokemon;
