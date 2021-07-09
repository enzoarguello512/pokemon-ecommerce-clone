import React, {useEffect, useState} from "react"
import PropTypes from 'prop-types';
import H1 from './../../Atoms/H1/H1';
import Button from "./../../Atoms/Button/Button";
import {getFirestore, convertTimestamp} from './../../../firebase';

require('./OrderDetail.css')

const db = getFirestore();

function OrderDetail({match}) {

  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getOrder = async (id) => {
      try {
        const response = await db.collection("orders").doc(id).get();
        const responseData = response.data();
        const fullData = {...responseData, 'id': response.id};
        setOrder(fullData);
        setLoading(false);
      }
      catch (error) {
        console.log(error);
      }
    }

    getOrder(match.params.id);
  }, [match.params.id])

  return (
    <div className="my-5">
      <div className="text-center bg-white border rounded">
        <H1 titleClass="border-bottom m-0 py-2">Detalle de la orden</H1>
        <div className="table-responsive">
          <table className="table m-0 order-table">
            <thead className="table-light">
              <tr>
                <th className="order-table__date" scope="col">
                  <div className="text-secondary">Pedido realizado</div>
                  <div className="pt-2">{!loading ? convertTimestamp(order.date).toString() : 'loading'}</div>
                </th>
                <th className="order-table__min-data" scope="col">
                  <div className="text-secondary">Estado</div>
                  <div className="pt-2">Cerrado</div>
                </th>
                <th className="order-table__min-data" scope="col">
                  <div className="text-secondary">Total</div>
                  <div className="pt-2">{`${order.total} $`}</div>
                </th>
                <th className="order-table__min-data" scope="col">
                  <div className="text-secondary">Enviar a</div>
                  <div className="pt-2">Desconocido</div>
                </th>
                <th className="order-table__order-id" scope="col">
                  <div className="text-secondary">Orden #</div>
                  <div className="pt-2">{order.id}</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5">
                  <div className="table-responsive">
                    <table className="table m-0">
                      <thead>
                        <tr>
                          <th scope="col">Item #</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Descripcion</th>
                          <th scope="col">Cantidad</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          !loading
                            ? order.items.map(item =>
                              <tr key={item.id}>
                                <th className="order-table__item-id" scope="row">{item.id}</th>
                                <td className="order-table__item-name">{item.name}</td>
                                <td className="order-table__item-desc">{item.description}</td>
                                <td className="order-table__item-qty">{item.quantityOnCart}</td>
                                <td className="order-table__item-price">{`${item.price} $`}</td>
                                <td className="order-table__item-total-price">{`${item.price * item.quantityOnCart} $`}</td>
                              </tr>)
                            : <tr className="text-center">
                              <th colSpan="6" scope="col">Loading</th>
                            </tr>
                        }
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot className="table-light">
              <tr>
                <td className="py-3" colSpan="5">
                  <Button><i className="fas fa-certificate"></i> View orders</Button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}

OrderDetail.propTypes = {
  match: PropTypes.object.isRequired,
};

export default OrderDetail
