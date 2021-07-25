import React from 'react';
import TemplateHome from './../../Templates/TemplateHome/TemplateHome';
import Navbar from './../../Organisms/Navbar/Navbar';
import Footer from '../../Organisms/Footer/Footer';
import CardSlider from '../../Organisms/CardSlider/CardSlider';
import Block3 from '../../Organisms/Block3/Block3';
import Block2 from '../../Molecules/Block2/Block2';

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

        </>
      }
      slider={<CardSlider />}
      footer={<Footer />}
    />
  )
}

export default Home
