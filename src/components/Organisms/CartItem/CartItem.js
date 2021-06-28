import React from "react"
import PropTypes from 'prop-types';
import Button from "../../Atoms/Button/Button"
import Input from './../../Atoms/Input/Input';
import Image from './../../Atoms/Image/Image';

require('./CartItem.css')

function CartItem({item}) {
  return (
    <div className="shadow rounded row my-3">
      <div className="col-2 text-center rounded-start">
        <figure className="m-0">
          <Image imgClass="img-fluid altura-2 my-2 shadow" src={item.imgSrc} alt={item.imgAlt} />
        </figure>
      </div>
      <div className="col-4">
        <div className="d-flex flex-column justify-content-center h-100">
          <h3 className="fw-bold text-truncate">{item.name}</h3>
          <p className="text-truncate">{item.desc}</p>
        </div>
      </div>
      <div className="col-3">
        <div className="d-flex flex-column justify-content-center h-100">
          <label htmlFor="test" className="text-center">Cantidad:</label>
          <div className="input-group justify-content-center">
            <Button btnClass="btn-red text-white border">-</Button>
            <Input inputClass="text-center w-100px border" id="test" ariaLabel="item quantity" value={item.quantityOnCart} />
            <Button btnClass="btn-red text-white border">+</Button>
          </div>
        </div>
      </div>
      <div className="col-3 rounded-end">
        <div className="text-end">
          <Button btnClass="btn-white text-danger border my-2">
            <i class="far fa-trash-alt"></i>
          </Button>
          <div className="fw-bold mt-2">{`${item.price * item.quantityOnCart}.00 $`}</div>
        </div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.node.isRequired,
};


export default CartItem
