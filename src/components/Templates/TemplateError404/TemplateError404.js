import React from "react"
import PropTypes from 'prop-types';

require('./TemplateError404.css')

function TemplateError404({header, errorComponent, footer}) {
  return <>
    {header}
    <main className="main-sections">
      <section className="container-xxl">{errorComponent}</section>
    </main>
    <footer className="main-footer">{footer}</footer>
  </>
}

TemplateError404.propTypes = {
  header: PropTypes.node.isRequired,
  errorComponent: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default TemplateError404
