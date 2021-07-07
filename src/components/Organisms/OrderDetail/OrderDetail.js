import React from "react"
import PropTypes from 'prop-types';
import H1 from './../../Atoms/H1/H1';
import Button from "./../../Atoms/Button/Button";

require('./OrderDetail.css')

function OrderDetail({match}) {
  return (
    <div className="my-5">
      <div className="text-center bg-white border rounded">
        <H1 titleClass="border-bottom m-0 py-2">Order detail</H1>
        <div className="table-responsive">
          <table class="table m-0">
            <thead className="table-light">
              <tr>
                <th scope="col">
                  <div className="text-secondary">Order Placed</div>
                  <div className="pt-2">28-AUG-2017</div>
                </th>
                <th scope="col">
                  <div className="text-secondary">Status</div>
                  <div className="pt-2">Closed</div>
                </th>
                <th scope="col">
                  <div className="text-secondary">Total</div>
                  <div className="pt-2">$2000</div>
                </th>
                <th scope="col">
                  <div className="text-secondary">Ship to</div>
                  <div className="pt-2">Unknown</div>
                </th>
                <th scope="col">
                  <div className="text-secondary">Order #</div>
                  <div className="pt-2">55239593</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="5">
                  <div className="table-responsive">
                    <table class="table m-0">
                      <thead>
                        <tr>
                          <th scope="col">Item #</th>
                          <th scope="col">Name</th>
                          <th scope="col">Description</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Price</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">id</th>
                          <td>Name</td>
                          <td>Description</td>
                          <td>Quantity</td>
                          <td>Price</td>
                          <td>Total</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot class="table-light">
              <tr>
                <td className="py-3" colspan="5">
                  <Button><i class="fas fa-certificate"></i> View orders</Button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}

//<h3>Titular:</h3>
//<h3>Numero de tarjeta:</h3>
//<h3>Articulos:</h3>

OrderDetail.propTypes = {
  match: PropTypes.object.isRequired,
};

export default OrderDetail
