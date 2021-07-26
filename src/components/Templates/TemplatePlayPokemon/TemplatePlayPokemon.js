import React from "react"
import PropTypes from 'prop-types';

require('./TemplatePlayPokemon.css')

function TemplatePlayPokemon({header, mainTitle, hero, subHero, newsColumn, slider, footer}) {
  return <>
    {header}
    <main className="main-sections">
      <section className="container-xxl white-striped-background pb-5">
        <div className="main-sections__title">{mainTitle}</div>
        <div className="main-sections__main-info">
          <div className="row">
            <div className="col-8">
              <div>{hero}</div>
              <div className="row">{subHero}</div>
            </div>
            <div className="col-4">{newsColumn}</div>
          </div>
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
