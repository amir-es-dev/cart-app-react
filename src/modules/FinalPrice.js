export const FinalPrice = (price, discount, count = 1) =>
  (count * (price * (100 - discount))) / 100;
