import React from 'react';
import TemplateApps from '../../Templates/TemplateApps/TemplateApps';
import Navbar from './../../Organisms/Navbar/Navbar';

function Apps() {
  return (
    <TemplateApps
      header={<Navbar />}
      mainTitle={'title'}
      mainBanner={'mainBanner'}
      mosaicGrid={'mosaicGrid'}
      footer={'footer'}
    />
  );
}

export default Apps;
