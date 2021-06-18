import React from "react"
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

function ItemDetail({name}) {
  return <>
    <div className="item-image my-3">
      <div className="text-center">
        <img src="/images/BWP_ES_BW01.png" alt="test" />
      </div>
    </div>
    <div className="item-description my-3">
      <div className="item-description__item-title">
        <h1>{name}</h1>
      </div>
      <div className="item-description__item-basic-info">
        desc
      </div>
    </div>
    <div className="my-3">
      <h2 className="text-center">$1035</h2>
      <ItemCount stock={26} initial={1} />
    </div>
  </>
}

export default ItemDetail
