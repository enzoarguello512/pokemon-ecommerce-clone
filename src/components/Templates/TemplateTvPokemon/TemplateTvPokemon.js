import React from "react"
import PropTypes from 'prop-types';

require('./TemplateTvPokemon.css')

function TemplateTvPokemon({header, mainTitle, hero, newsColumn, news, footer}) {
  return <>
    {header}
    <main className="main-sections">
      <section className="container-xxl white-striped-background">
        <div className="main-sections__title">{mainTitle}</div>
        <div className="main-sections__main-info">
          <div className="row">
            <div className="col-6">{hero}</div>
            <div className="col-6">{newsColumn}</div>
          </div>
        </div>
      </section>
      <section className="container-xxl main-sections__news">
        <div>{news}</div>
      </section>
    </main>
    <footer className="main-footer">{footer}</footer>
  </>
}

TemplateTvPokemon.propTypes = {
  header: PropTypes.node.isRequired,
  mainTitle: PropTypes.node.isRequired,
  hero: PropTypes.node.isRequired,
  newsColumn: PropTypes.node.isRequired,
  news: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default TemplateTvPokemon
