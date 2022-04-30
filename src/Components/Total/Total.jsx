import "./Total.css";
import { TotalDiscount } from "../../modules/TotalDiscount";

const Total = ({ data }) => {
  const totalPrice = data?.reduce((total, current) => total + current.price, 0);
  const totalPayment = data?.reduce(
    (total, current) => total + current.finalPrice,
    0
  );
  const totalDiscount = totalPrice
    ? Math.floor(TotalDiscount(totalPayment, totalPrice))
    : 0;
  console.log("total rendered");
  return (
    <div className="total-box">
      <div>
        <p>Total Price</p>
        <p>{totalPrice.toFixed(2)}$</p>
      </div>
      <div>
        <p>Total Discount</p>
        <p>{totalDiscount}%</p>
      </div>
      <div>
        <p>Total Payment</p>
        <p>{totalPayment.toFixed(2)}$</p>
      </div>
    </div>
  );
};

export default Total;
