import { PaymentActionTypes } from './payment.types';

export const paymentCompleted = (value) => ({
  type: PaymentActionTypes.PAYMENT_COMPLETED,
  payload: value
});
