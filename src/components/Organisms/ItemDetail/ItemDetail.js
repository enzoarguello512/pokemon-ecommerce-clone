import React from "react"
import Image from "../../Atoms/Image/Image";
import ItemCount from './../../Molecules/ItemCount/ItemCount';

require('./ItemDetail.css');

function ItemDetail({item}) {
  return <>
    <div className="item-image my-3">
      <div className="text-center">
        <Image src={item.imgSrc} alt={item.imgAlt} />
      </div>
    </div>
    <div className="item-description my-3">
      <div className="item-description__item-title">
        <h1>{item.name}</h1>
      </div>
      <div className="item-description__item-basic-info">
        {item.desc}
      </div>
    </div>
    <div className="my-3">
      <h2 className="text-center">{`$${item.price}`}</h2>
      <ItemCount stock={item.stock} initial={1} />
    </div>
  </>
}

export default ItemDetail
