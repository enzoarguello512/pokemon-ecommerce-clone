import React from 'react';
import TemplateApps from '../../Templates/TemplateApps/TemplateApps';
import Navbar from './../../Organisms/Navbar/Navbar';
import Footer from '../../Organisms/Footer/Footer';
import H1 from './../../Atoms/H1/H1'
import Block4 from '../../Organisms/Block4/Block4';
import MosaicGrid from '../../Organisms/MosaicGrid/MosaicGrid';

function Apps() {
  return (
    <TemplateApps
      header={<Navbar />}
      mainTitle={<H1 titleClass="text-secondary">Galería de aplicaciones móviles Pokémon</H1>}
      mainBanner={
        <Block4
          mainTitle="Aplicación TV Pokémon para dispositivos móviles"
          bgColorClass="bg-light-dark bg-transition"
          imgSrc="/images/apps/pokemon-tv-app-872x245.jpg"
          imgAlt="pokemon-tv-app"
          articleHref="https://www.pokemon.com/el/app/tv-pokemon/"
        />
      }
      mosaicGrid={<MosaicGrid />}
      footer={<Footer />}
    />
  );
}

export default Apps;
