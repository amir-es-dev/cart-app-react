export const TotalDiscount = (totalPayment, totalPrice) =>
  100 - (totalPayment * 100) / totalPrice;
