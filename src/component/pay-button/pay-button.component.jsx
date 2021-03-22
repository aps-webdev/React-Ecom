import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './pay-button.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

function PayButton({ price }) {
  const payableAmount = price * 100;
  const publishableKey =
    'pk_test_51IWTs0EA2BokFdVkqCyI3LQx8Kkqsi2sP6y654w28TKgbpRUd4sBEX1oyHVbiiTuYMIWOOG63jpWm53WXRZEquBQ00MgTU0i24';

  const onTokenCall = (token) => {
    console.log('Token to be send for Payment', token);
    alert('Payment Completed');
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

export default PayButton;
