import React, {useState} from "react"
import ItemCount from "../ItemCount/ItemCount";
import test from './../../img/BWP_ES_BW01.png';

function Item() {
  return <>


    <ItemCount stock={26} initial={1} />
  </>
}

export default Item
