import { Slider } from "antd";
import { useState } from "react";
import "./AddItem.css";
import { FinalPrice } from "../../modules/FinalPrice";

const AddItem = ({ data, setData }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState(1);
  const [discount, setDiscount] = useState(0);

  const createItem = () => {
    if (
      !name ||
      !price ||
      !count ||
      typeof count !== "number" ||
      typeof price !== "number"
    ) {
      alert("please insert valid information");
      setPrice("");
      setDiscount("");
      setCount(1);
      return;
    }
    const item = {
      name,
      price: price * count,
      discount,
      count,
      finalPrice: FinalPrice(price, discount, count),
    };
    const updatedData = [...data, item];
    setData(updatedData);
    setName("");
    setPrice("");
    setDiscount(0);
    setCount(1);
  };

  return (
    <div className="add-box">
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
      <button onClick={createItem}>Add</button>
    </div>
  );
};

export default AddItem;
