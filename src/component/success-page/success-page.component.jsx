import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import './success-page.styles.scss';

import { paymentCompleted } from '../../redux/payment/payment.action';

import CheckIcon from '../../assets/check.svg';

function SuccessPage({ paymentDone }) {
  React.useEffect(() => {
    return () => {
      //unmounting success page
      paymentDone(false);
    };
  });
  const location = useLocation();
  const { totalPrice, card } = location.state.token;
  return (
    <div className='success-page'>
      <div className='card'>
        <span className='card__success'>
          <img src={CheckIcon} alt='checkmark' />
        </span>
        <h1 className='card__msg'>Payment Completed</h1>
        <h2 className='card__submsg'>Thank you for shopping with us.</h2>
        <div className='card__body'>
          <h1 className='card__price'>
            <span> &#x20B9;</span>
            <span>{totalPrice.toFixed(2)}</span>
          </h1>
          <p className='card__method'>Payment method</p>
          <div className='card__payment'>
            <img
              src='https://seeklogo.com/images/V/VISA-logo-F3440F512B-seeklogo.com.png'
              className='card__credit-card'
              alt='card-logo'
            />
            <div className='card__card-details'>
              <p className='card__card-type'>Credit / debit card</p>
              <p className='card__card-number'>Visa ending with {card.last4}</p>
            </div>
          </div>
        </div>
        <div className='card__tags'>
          <span className='card__tag'>completed</span>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  paymentDone: (value) => dispatch(paymentCompleted(value)),
});

export default connect(null, mapDispatchToProps)(SuccessPage);
