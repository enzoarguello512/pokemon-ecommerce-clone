import React from 'react';
import CartSummary from '../../Organisms/CartSummary/CartSummary';
import TemplateCart from '../../Templates/TemplateCart/TemplateCart';
import Navbar from './../../Organisms/Navbar/Navbar';


function Cart() {

  return (
    <TemplateCart
      header={<Navbar />}
      cart={<CartSummary />}
      footer={'footer'}
    />
  )
}

export default Cart;
