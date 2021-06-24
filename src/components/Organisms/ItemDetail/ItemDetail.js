import React, {useState} from "react"
import Image from "../../Atoms/Image/Image";
import ItemCount from './../../Molecules/ItemCount/ItemCount';

require('./ItemDetail.css');

function ItemDetail({item}) {

  const [quantity, setQuantity] = useState(0);

  const onAdd = quantityToAdd => {
    setQuantity(quantityToAdd);
  }

  console.log(quantity);

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
    <div className="my-3 text-center">
      <ItemCount price={item.price} stock={item.stock} initial={1} onAdd={onAdd} />
    </div>
  </>
}

export default ItemDetail
