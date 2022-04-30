import { FinalPrice } from "../../modules/FinalPrice";
import { Slider } from "antd";
import "./Panel.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Panel = ({ data, setData, editModal, setEditModal }) => {
  const [product, setProduct] = useState({
    name: editModal ? editModal.name : "",
    price: editModal ? editModal.price / editModal.count : 0,
    count: editModal ? editModal.count : 1,
    discount: editModal ? editModal.discount : 0,
  });

  console.log("panel rendered");
  console.log("product= ", product);

  const handleItem = (e, key) => {
    const update = { ...product };
    update[key] = typeof e === "number" ? e : e.target.value;
    setProduct(update);
  };

  const handleClick = () => {
    if (!product.name || !product.price) {
      alert("please insert valid information");
      return;
    }
    const newData = editModal
      ? data.filter((product) => product.id !== editModal.id)
      : data;
    const item = { ...product };
    item.price = item.price * item.count;
    item.finalPrice = FinalPrice(
      product.price,
      product.discount,
      product.count
    );
    item.id = uuid();
    const updatedData = [...newData, item];
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
    if (editModal) setEditModal(null);
    setProduct({
      name: "",
      price: "",
      count: 1,
      discount: 0,
    });
  };

  return (
    <div className={`panel ${editModal ? "edit-panel" : "main-panel"}`}>
      <h4>Name</h4>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={(e) => handleItem(e, "name")}
        placeholder="Enter the Product Name"
      />
      <h4>Price</h4>
      <input
        type="text"
        name="price"
        value={product.price ? product.price : ""}
        onChange={(e) => handleItem(e, "price")}
        placeholder="Enter the Product Price"
      />
      <h4>Count of Product</h4>
      <input
        type="number"
        name="count"
        value={product.count ? product.count : ""}
        min="1"
        onChange={(e) => handleItem(e, "count")}
      />
      <Slider
        tipFormatter={(value) => `${value}%`}
        defaultValue={100}
        value={product.discount}
        onChange={(e) => handleItem(e, "discount")}
      />
      <div className="final-price">
        <span>Final Price: </span>
        <h4>
          {product.price
            ? `${FinalPrice(
                product.price,
                product.discount,
                product.count
              ).toFixed(2)} $`
            : null}
        </h4>
      </div>
      <button onClick={handleClick}>{editModal ? "Save" : "Add"}</button>
    </div>
  );
};

export default Panel;
