import React from 'react';
import TemplateHome from './../../Templates/TemplateHome/TemplateHome';
import Navbar from './../../Organisms/Navbar/Navbar';
import Footer from '../../Organisms/Footer/Footer';
import CardSlider from '../../Organisms/CardSlider/CardSlider';
import Block3 from '../../Organisms/Block3/Block3';
import Block2 from '../../Molecules/Block2/Block2';
import Block1 from '../../Molecules/Block1/Block1';

function Home() {
  return (
    <TemplateHome
      header={<Navbar />}
      hero={
        <Block3
          mainTitle={"¡Combate junto a tu equipo en Pokémon UNITE , ya disponible en Nintendo Switch!"}
          desc="Únete a otros Entrenadores para participar en combates de 5 contra 5 llenos de emoción y estrategia."
          bgColorClass="bg-light-brown"
          imgSrc="/images/home/pokemon-unite-169.jpg"
          imgAlt="pokemon-unite"
          articleHref="https://unite.pokemon.com/es-mx/"
        />
      }
      news={
        <>
          <Block2
            mainTitle="Actividades Pokémon llenas de diversión para niños"
            bgColorClass="bg-orange"
            imgSrc="/images/home/printable-activities-169-latam.jpg"
            imgAlt="printable-activities"
            articleHref="https://www.pokemon.com/el/actividades-para-imprimir/"
            colWidth="col-6"
            marginWidth="ms-4"
          />
          <Block2
            mainTitle="Toma el mando con cartas legendarias de Espada y Escudo-Reinado Escalofriante"
            bgColorClass="bg-light-red"
            imgSrc="/images/home/swsh06-top-cards-169-es.jpg"
            imgAlt="swsh06-top-cards"
            articleHref="https://www.pokemon.com/el/estrategia/las-mejores-cartas-de-espada-y-escudo-reinado-escalofriante-de-jcc-pokemon-para-competir/"
            colWidth="col-6"
            marginWidth="me-4"
          />
        </>
      }
      newsColumn={
        <>
          <Block2
            mainTitle="Latas de JCC Pokémon para las Evoluciones de Eevee"
            bgColorClass="bg-light-dark"
            imgSrc="/images/home/eevee-evolutions-tin-169-es.jpg"
            imgAlt="eevee-evolutions-tin"
            articleHref="https://www.pokemon.com/el/jcc-pokemon/galeria-de-productos/lata-evoluciones-de-eevee/"
            marginWidth="me-4"
          />
          <Block2
            mainTitle="Una triple jugada para JCC Pokémon: tres expertos construyen barajas en torno a Blissey V"
            bgColorClass="bg-purple"
            imgSrc="/images/home/swsh06-blissey-v-169-es.jpg"
            imgAlt="swsh06-blissey-v-169-es"
            articleHref="https://www.pokemon.com/el/estrategia/una-triple-jugada-para-jcc-pokemon-potentes-barajas-en-torno-a-blissey-v-de-espada-y-escudo-reinado-escalofriante/"
            marginWidth="me-4"
          />
          <Block1
            mainTitle="TV Pokémon: Pokémon de Sinnoh"
            bgColorClass="bg-aqua"
            imgSrc="/images/home/sinnoh-34-es.png"
            imgAlt="sinnoh-34-es"
            articleHref="https://www.pokemon.com/el/noticias-pokemon/conoce-a-los-sensacionales-primeros-companeros-pokemon-de-sinnoh-en-tv-pokemon/"
            marginWidth="me-4"
          />
        </>
      }
      slider={<CardSlider />}
      footer={<Footer />}
    />
  )
}

export default Home
