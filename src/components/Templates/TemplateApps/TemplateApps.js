import React from "react"
import PropTypes from 'prop-types';

require('./TemplateApps.css')

function TemplateApps({header, mainTitle, mainBanner, mosaicGrid, footer}) {
  return <>
    {header}
    <main className="main-sections">
      <section className="container-xxl">
        <div className="main-sections__title mb-3">{mainTitle}</div>
      </section>
      <section className="container-xxl main-sections__main-banner">{mainBanner}</section>
      <section className="container-xxl">
        <div className="main-sections__mosaic-grid">{mosaicGrid}</div>
      </section>
    </main>
    <footer className="main-footer">{footer}</footer>
  </>

}

TemplateApps.propTypes = {
  header: PropTypes.node.isRequired,
  mainTitle: PropTypes.node.isRequired,
  mainBanner: PropTypes.node.isRequired,
  mosaicGrid: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default TemplateApps
