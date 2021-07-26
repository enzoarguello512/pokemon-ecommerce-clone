import React from "react"
import PropTypes from 'prop-types';
import A from '../../Atoms/A/A';
import Image from '../../Atoms/Image/Image';

require('./PokedexItem.css')

function PokedexItem({mainTitle, imgSrc, articleHref, tags, itemNumber}) {
  return (
    <li className="pokedex-item">
      <A href={articleHref}>
        <div className="text-center pokedex-item__img-container">
          <Image imgClass="img-fluid rounded-top" src={imgSrc} alt={mainTitle} />
        </div>
      </A>
      <div className="pb-2 text-secondary">{`N.º ${itemNumber}`}</div>
      <h5 className="text-dark m-0 pb-2">{mainTitle}</h5>

      {tags && tags.length > 0
        ? <div>
          {tags.map((elem, i) => <span key={i} className="badge bg-white border text-dark me-2">{elem}</span>)}
        </div>
        : null}
    </li>
  )
}

PokedexItem.defaultProps = {
  itemNumber: "000",
}

PokedexItem.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  articleHref: PropTypes.string.isRequired,
  tags: PropTypes.array,
  itemNumber: PropTypes.string,
};

export default PokedexItem
