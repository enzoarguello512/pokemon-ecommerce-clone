import React from "react"
import PropTypes from 'prop-types';

require('./TemplatePokedex.css')

function TemplatePokedex({header, mainTitle, searcher, sortby, listedPokemons, footer}) {
  return <>
    {header}
    <main className="main-sections">
      <section className="container-xxl white-striped-background">
        <div className="main-sections__title">{mainTitle}</div>
      </section>
      <div className="container-xxl bg-darker-1">
        <div className="main-sections__pokedex-search">{searcher}</div>
      </div>
      <div className="container-xxl white-striped-background">
        <div className="main-sections__sortby">{sortby}</div>
        <div className="main-sections__pokedex-results">{listedPokemons}</div>
      </div>
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
