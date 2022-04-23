import { Slider } from "antd";
import { FinalPrice } from "../../modules/FinalPrice";

const EditModal = ({
  name,
  setName,
  price,
  setPrice,
  count,
  setCount,
  discount,
  setDiscount,
}) => {
  return (
    <div className="add-box1">
      <h4>Name</h4>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter the Product Name"
      />
      <h4>Price</h4>
      <input
        type="text"
        value={price ? price : ""}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        placeholder="Enter the Product Price"
      />
      <h4>Count of Product</h4>
      <input
        type="number"
        value={count ? count : ""}
        onChange={(e) => setCount(parseFloat(e.target.value))}
      />
      <h4>Discount</h4>
      <Slider
        tipFormatter={(value) => `${value}%`}
        defaultValue={100}
        value={discount}
        onChange={(value) => setDiscount(value)}
      />
      <div className="final-price">
        <span>Final Price: </span>
        <h4>
          {price ? `${FinalPrice(price, discount, count).toFixed(2)} $` : null}
        </h4>
      </div>
    </div>
  );
};

export default EditModal;
