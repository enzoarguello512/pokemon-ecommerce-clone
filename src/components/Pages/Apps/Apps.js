import React from 'react';
import TemplateApps from '../../Templates/TemplateApps/TemplateApps';
import Navbar from './../../Organisms/Navbar/Navbar';
import Footer from '../../Organisms/Footer/Footer';

function Apps() {
  return (
    <TemplateApps
      header={<Navbar />}
      mainTitle={'title'}
      mainBanner={'mainBanner'}
      mosaicGrid={'mosaicGrid'}
      footer={<Footer />}
    />
  );
}

export default Apps;
