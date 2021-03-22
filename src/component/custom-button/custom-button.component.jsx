import React from 'react';

import './custom-button.styles.scss';

function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  pay,
  disabled,
  ...otherProps
}) {
  return (
    <button
      className={`${disabled ? 'disable' : ''} ${pay ? 'pay' : ''}${
        inverted ? 'inverted' : ''
      }${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default CustomButton;
