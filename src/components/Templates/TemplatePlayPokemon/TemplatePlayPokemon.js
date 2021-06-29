import React from "react"
import PropTypes from 'prop-types';

require('./TemplatePlayPokemon.css')

function TemplatePlayPokemon({header, mainTitle, hero, subHero, newsColumn, slider, footer}) {
  return <>
    {header}
    <main className="main-sections">
      <section className="container-xxl">
        <div className="main-sections__title mb-3">{mainTitle}</div>
      </section>
      <section className="container-xxl main-sections__main-info">
        <div className="row">
          <div className="col-6">
            <div>{hero}</div>
            <div>{subHero}</div>
          </div>
          <div className="col-6">{newsColumn}</div>
        </div>
      </section>
      <section className="container-xxl main-sections__slider">{slider}</section>
    </main>
    <footer className="main-footer">{footer}</footer>
  </>
}

TemplatePlayPokemon.propTypes = {
  header: PropTypes.node.isRequired,
  mainTitle: PropTypes.node.isRequired,
  hero: PropTypes.node.isRequired,
  subHero: PropTypes.node.isRequired,
  newsColumn: PropTypes.node.isRequired,
  slider: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default TemplatePlayPokemon
