import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

import './pay-button.styles.scss';
import { afterPaymentRemoveBagItems } from '../../redux/cart/cart.action';
import { paymentCompleted } from '../../redux/payment/payment.action';
import CustomButton from '../custom-button/custom-button.component';

function PayButton({ price, clearBag, paymentDone }) {
  const history = useHistory();
  const payableAmount = price * 100;
  const publishableKey =
    'pk_test_51IWTs0EA2BokFdVkqCyI3LQx8Kkqsi2sP6y654w28TKgbpRUd4sBEX1oyHVbiiTuYMIWOOG63jpWm53WXRZEquBQ00MgTU0i24';

  const onTokenCall = (token) => {
    token.totalPrice = price;
    paymentDone(true);
    clearBag();
    history.push({
      pathname: '/success',
      state: { token },
    });
  };
  return (
    <StripeCheckout
      label={`Pay Now`}
      name='React Ecommerce'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Amount to be paid \u20A8. ${price}`}
      amount={payableAmount}
      panelLabel='Pay Now'
      token={onTokenCall}
      stripeKey={publishableKey}
      currency='INR'
    >
      <CustomButton pay disabled={price ? false : true}>
        Pay Now
      </CustomButton>
    </StripeCheckout>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearBag: () => dispatch(afterPaymentRemoveBagItems()),
  paymentDone: (value) => dispatch(paymentCompleted(value)),
});

export default connect(null, mapDispatchToProps)(PayButton);
