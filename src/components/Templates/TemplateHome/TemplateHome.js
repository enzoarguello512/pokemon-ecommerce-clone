import React from "react"
import PropTypes from 'prop-types';

require('./TemplateHome.css')

function TemplateHome({header, mainTitle, filters, filteredItems, slider, footer}) {
  return <>
    <header className="main-header">{header}</header>
    <main className="main-sections">
      <div className="main-sections__title my-3">{mainTitle}</div>
      <section>
        <div className="main-sections__filters">{filters}</div>
        <div className="main-sections__filteredItems">{filteredItems}</div>
      </section>
      <section className="main-sections__slider">{slider}</section>
    </main>
    <footer className="main-footer">{footer}</footer>
  </>
}

TemplateHome.propTypes = {
  header: PropTypes.node.isRequired,
  mainTitle: PropTypes.node.isRequired,
  filters: PropTypes.node.isRequired,
  filteredItems: PropTypes.node.isRequired,
  slider: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default TemplateHome
