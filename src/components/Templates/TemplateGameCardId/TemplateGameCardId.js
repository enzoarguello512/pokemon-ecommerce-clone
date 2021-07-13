import React from "react"
import PropTypes from 'prop-types';

require('./TemplateGameCardId.css')

function TemplateGameCardId({header, cardDetail, slider, footer}) {
  return <>
    {header}
    <main className="main-sections">
      <section className="container-xxl white-striped-background">
        <div className="main-sections__card-detail">
          {cardDetail}
        </div>
      </section>
      <section className="container-xxl main-sections__slider">{slider}</section>
    </main>
    <footer className="main-footer">{footer}</footer>
  </>
}

TemplateGameCardId.propTypes = {
  header: PropTypes.node.isRequired,
  cardDetail: PropTypes.node.isRequired,
  slider: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default TemplateGameCardId
