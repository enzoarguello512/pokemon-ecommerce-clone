import React from "react"
import TemplateCartOrder from "../../Templates/TemplateCartOrder/TemplateCartOrder";
import Navbar from './../../Organisms/Navbar/Navbar';
import Footer from '../../Organisms/Footer/Footer';
import OrderDetail from "../../Organisms/OrderDetail/OrderDetail";

function CartOrder({match}) {
  return (
    <TemplateCartOrder
      header={<Navbar />}
      order={<OrderDetail match={match} />}
      footer={<Footer />}
    />
  )
}

export default CartOrder
