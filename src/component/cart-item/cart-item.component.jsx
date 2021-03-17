import React from 'react';

import './cart-item.styles.scss';

function CartItem({ item: { imageUrl, name, price, quantity } }) {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          &#x20B9;{price} x {quantity}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
