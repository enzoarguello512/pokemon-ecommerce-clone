import React from "react"
import PropTypes from 'prop-types';

require('./TemplateCartOrder.css')

function TemplateCartOrder({header, order, footer}) {
  return <>
    {header}
    <main className="main-sections">
      <section className="container-xxl white-striped-background">
        <div className="main-sections__order-detail">{order}</div>
      </section>
    </main>
    <footer className="main-footer">{footer}</footer>
  </>
}

TemplateCartOrder.propTypes = {
  header: PropTypes.node.isRequired,
  order: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default TemplateCartOrder
