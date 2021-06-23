import React from "react"
import PropTypes from 'prop-types';

require('./TemplatePokedex.css')

function TemplatePokedex({header, mainTitle, searcher, sortby, listedPokemons, footer}) {
  return <>
    <header className="main-header">{header}</header>
    <main className="main-sections">
      <section className="container-xxl">
        <div className="main-sections__title mb-3">{mainTitle}</div>
      </section>
      <div className="container-xxl main-sections__pokedex-search">{searcher}</div>
      <div className="container-xxl main-sections__sortby">{sortby}</div>
      <div className="container-xxl main-sections__pokedex-results">{listedPokemons}</div>
    </main>
    <footer className="main-footer">{footer}</footer>
  </>
}

TemplatePokedex.propTypes = {
  header: PropTypes.node.isRequired,
  mainTitle: PropTypes.node.isRequired,
  sortby: PropTypes.node.isRequired,
  listedPokemons: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default TemplatePokedex
