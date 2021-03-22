import { createSelector } from 'reselect';

const selectPayment = (state) => state.payment;

export const selectPaymentCompleted = createSelector(
  [selectPayment],
  (payment) => payment.paymentCompleted
);
