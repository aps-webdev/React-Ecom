import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.styles.scss';

import {
  selectCartItem,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import CheckoutItems from '../../component/checkout-item/checkout-item.component';
import PayButton from '../../component/pay-button/pay-button.component';

function CheckoutPage({ cartItems, total }) {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItems key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <span>TOTAL: &#x20B9;{total}</span>
      </div>
      <div className='test-warning'>
        **Do not use your card details for the payment.
        <br />
        Please use the test credit card given below for payments
        <br />
        4000 0035 6000 0008
        <br />
        Exp: 01/25&nbsp;&nbsp;&nbsp;&nbsp;CVV:420
      </div>
      <PayButton price={total} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
