import React from "react"
import Button from "../../Atoms/Button/Button"
import Input from './../../Atoms/Input/Input';
import Image from './../../Atoms/Image/Image';
//import PropTypes from 'prop-types';

require('./CartSummary.css')

function CartSummary() {
  return (
    <div className="container-xxl my-5">
      <h1 className="text-center fs-2">Cart Summary</h1>
      <div className="clase-alta-300px">

        <div className="shadow rounded row">
          <h3 className="text-center m-auto">The Cart is empty.</h3>
        </div>

        <div className="shadow rounded row my-3">
          <div className="col-2 text-center rounded-start">
            <figure className="m-0">
              <Image imgClass="img-fluid altura-2 my-2" src="/images/BWP_ES_BW41.png" alt="test" />
            </figure>
          </div>
          <div className="col-4">
            <div className="d-flex flex-column justify-content-center h-100">
              <h3 className="fw-bold text-truncate">Item title</h3>
              <p className="text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione et, maxime tempore tenetur eum in neque incidunt ducimus ex dicta ea autem reiciendis delectus magni natus. Sed laborum maxime ab.</p>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex flex-column justify-content-center h-100">
              <label htmlFor="test" className="text-center">Cantidad:</label>
              <div className="input-group justify-content-center">
                <Button btnClass="btn-red text-white border">-</Button>
                <Input inputClass="text-center w-100px border" id="test" ariaLabel="item quantity" value="1" />
                <Button btnClass="btn-red text-white border">+</Button>
              </div>
            </div>
          </div>
          <div className="col-3 rounded-end">
            <div className="text-end">
              <Button btnClass="btn-white text-danger border my-2">
                <i class="far fa-trash-alt"></i>
              </Button>
              <div className="fw-bold mt-2">245.00 $</div>
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}


export default CartSummary
