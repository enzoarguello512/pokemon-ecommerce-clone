import React, {useContext} from "react"
import PropTypes from 'prop-types';
import {categoriesContext} from './../../Contexts/GameCards/GameCards';

require('./TemplateGameCards.css')

function TemplateGameCards({header, mainTitle, filters, filteredItems, slider, footer}) {

  const [activeCategories] = useContext(categoriesContext);

  return <>
    {header}
    <main className="main-sections">
      <section className="container-xxl">
        <div className="main-sections__title mb-3">{mainTitle}</div>
      </section>
      <section className="container-xxl">
        <div className="main-sections__filters">{filters}</div>
        {
          activeCategories && activeCategories.length > 0 && <div className="main-sections__filteredItems">{filteredItems}</div>
        }
      </section>
      <section className="container-xxl main-sections__slider">{slider}</section>
    </main>
    <footer className="main-footer">{footer}</footer>
  </>
}

TemplateGameCards.propTypes = {
  header: PropTypes.node.isRequired,
  mainTitle: PropTypes.node.isRequired,
  filters: PropTypes.node.isRequired,
  filteredItems: PropTypes.node.isRequired,
  slider: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default TemplateGameCards
