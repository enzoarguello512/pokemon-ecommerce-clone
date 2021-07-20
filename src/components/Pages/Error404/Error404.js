import React from "react"
import TemplateError404 from "../../Templates/TemplateError404/TemplateError404";
import Navbar from './../../Organisms/Navbar/Navbar';
import Footer from '../../Organisms/Footer/Footer';
import Error404Container from "../../Organisms/Error404Container/Error404Container";

function Error404() {
  return (
    <TemplateError404
      header={<Navbar />}
      errorComponent={<Error404Container />}
      footer={<Footer />}
    />
  );
}

export default Error404;
