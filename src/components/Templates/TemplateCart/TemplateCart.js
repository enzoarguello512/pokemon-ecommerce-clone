import React from "react"
import PropTypes from 'prop-types';

require('./TemplateCart.css')

function TemplateCart({header, cart, footer}) {
  return <>
    {header}
    <main className="main-sections bg-white">
      {cart}
    </main>
    <footer className="main-footer">{footer}</footer>
  </>
}

TemplateCart.propTypes = {
  header: PropTypes.node.isRequired,
  cart: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default TemplateCart
