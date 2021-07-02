import React, {useContext} from "react"
import PropTypes from 'prop-types';
import {categoriesContext} from './../../Contexts/GameCards/GameCards';

require('./TemplateGameCards.css')

function TemplateGameCards({header, mainTitle, filters, filteredItems, slider, footer}) {

  const [activeCategories] = useContext(categoriesContext);

  return <>
    {header}
    <main className="main-sections">
      <section className="container-xxl white-striped-background">
        <div className="main-sections__title">{mainTitle}</div>
      </section>
      <section className="container-xxl bg-darker-1">
        <div className="main-sections__filters">{filters}</div>
      </section>
      <section className="container-xxl white-striped-background">
        {
          activeCategories && activeCategories.length > 0 &&
          <div className="main-sections__filteredItems">
            {filteredItems}

            <div className="text-center">
              <div className="input-group mt-5">
                <span className="input-group-text">$</span>
                <span className="input-group-text">0.00</span>
                <span className="input-group-text">0.00</span>
              </div>
            </div>

          </div>
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
