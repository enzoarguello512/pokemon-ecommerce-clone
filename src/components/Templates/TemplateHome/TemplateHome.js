import React from "react"
import PropTypes from 'prop-types';

require('./TemplateHome.css')

function TemplateHome({header, hero, news, slider, footer}) {
  return <>
    <header className="main-header">{header}</header>
    <main className="main-sections">
      <section className="container-xxl main-sections__main-info">
        <div>{hero}</div>
      </section>
      <section className="container-xxl main-sections__news">
        <div>{news}</div>
      </section>
      <section className="container-xxl main-sections__slider">{slider}</section>
    </main>
    <footer className="main-footer">{footer}</footer>
  </>
}

TemplateHome.propTypes = {
  header: PropTypes.node.isRequired,
  hero: PropTypes.node.isRequired,
  news: PropTypes.node.isRequired,
  slider: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default TemplateHome
