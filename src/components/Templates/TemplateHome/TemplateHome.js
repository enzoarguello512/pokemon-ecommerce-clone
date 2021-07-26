import React from "react"
import PropTypes from 'prop-types';

require('./TemplateHome.css')

function TemplateHome({header, hero, news, newsColumn, slider, footer}) {
  return <>
    {header}
    <main className="main-sections">
      <section className="container-xxl white-striped-background pb-5">
        <div className="main-sections__main-info">
          <div className="row pt-4">
            <div className="col-8">
              <div>{hero}</div>
              <div className="row">{news}</div>
            </div>
            <div className="col-4">
              {newsColumn}
            </div>
          </div>
        </div>
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
  newsColumn: PropTypes.node.isRequired,
  slider: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default TemplateHome
