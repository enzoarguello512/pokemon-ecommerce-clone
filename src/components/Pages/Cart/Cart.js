import React from 'react';
import CartSummary from '../../Organisms/CartSummary/CartSummary';
import TemplateCart from '../../Templates/TemplateCart/TemplateCart';
import Navbar from './../../Organisms/Navbar/Navbar';
import Footer from '../../Organisms/Footer/Footer';


function Cart() {

  return (
    <TemplateCart
      header={<Navbar />}
      cart={<CartSummary />}
      footer={<Footer />}
    />
  )
}

export default Cart;
