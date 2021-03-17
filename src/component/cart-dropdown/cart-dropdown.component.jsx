import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItem } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length === 0 ? (
          <div className='empty-cart'>Your Shopping Bag is Empty !</div>
        ) : (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        )}
      </div>
      <CustomButton>go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItem(state),
});

export default connect(mapStateToProps)(CartDropdown);
