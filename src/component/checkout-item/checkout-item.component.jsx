import React from 'react';

import './checkout-item.styles.scss';

function CheckoutItems({ cartItems: { imageUrl, name, quantity, price } }) {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button'>&#10007;</div>
    </div>
  );
}

export default CheckoutItems;
