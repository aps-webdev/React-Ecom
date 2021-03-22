import { PaymentActionTypes } from './payment.types';

const INITIAL_STATE = {
  paymentCompleted: false,
};

const paymentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PaymentActionTypes.PAYMENT_COMPLETED:
      return {
        ...state,
        paymentCompleted: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
