import React, {useState, useContext} from "react"
import Image from "../../Atoms/Image/Image";
import ItemCount from './../../Molecules/ItemCount/ItemCount';
import {CartContext} from './../../Contexts/CartContext/CartContext';

require('./ItemDetail.css');

function ItemDetail({item}) {

  const [quantity, setQuantity] = useState(1);

  const ctx = useContext(CartContext);

  const onAdd = quantityToAdd => {
    setQuantity(quantityToAdd);
    item.quantityOnCart = quantityToAdd;
    ctx.addItem(item);
  }

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
        {item.description}
      </div>
    </div>
    <div className="my-3 text-center">
      <ItemCount price={item.price} stock={item.stock} initial={quantity} onAdd={onAdd} />
    </div>
  </>
}

export default ItemDetail
