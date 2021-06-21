import React from 'react';
import TemplateHome from './../../Templates/TemplateHome/TemplateHome';
import Navbar from './../../Organisms/Navbar/Navbar';

function Home() {
  return (
    <TemplateHome 
      header={<Navbar />} 
      hero={'hero'}
      news={'news'}
      slider={'slider'}
      footer={'footer'}
    />
  )
}

export default Home
