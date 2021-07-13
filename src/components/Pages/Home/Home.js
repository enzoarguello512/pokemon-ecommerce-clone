import React from 'react';
import TemplateHome from './../../Templates/TemplateHome/TemplateHome';
import Navbar from './../../Organisms/Navbar/Navbar';
import Footer from '../../Organisms/Footer/Footer';
import CardSlider from '../../Organisms/CardSlider/CardSlider';

function Home() {
  return (
    <TemplateHome
      header={<Navbar />}
      mainTitle={'mainTitle'}
      hero={'hero'}
      news={'news'}
      newsColumn={'newsColumn'}
      slider={<CardSlider />}
      footer={<Footer />}
    />
  )
}

export default Home
