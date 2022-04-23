import { EditOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import EditModal from "../EditModal/EditModal";
import { FinalPrice } from "../../modules/FinalPrice";

const Edit = ({ index, data, setData }) => {
  const [editModal, setEditModal] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState(1);
  const [discount, setDiscount] = useState(0);

  const handleEdit = () => {
    setEditModal(true);
    setName(data[index]?.name);
    setPrice(data[index]?.price / data[index]?.count);
    setCount(data[index]?.count);
    setDiscount(data[index]?.discount);
  };

  const handleOk = () => {
    if (
      !name ||
      !price ||
      !count ||
      typeof count !== "number" ||
      typeof price !== "number"
    ) {
      alert("please insert valid information");
      setName(data[index]?.name);
      setPrice(data[index]?.price / data[index]?.count);
      setCount(data[index]?.count);
      setDiscount(data[index]?.discount);
      return;
    }
    const newdata = data.filter((item, i) => i !== index);
    const item = {
      name,
      price: price * count,
      discount,
      count,
      finalPrice: FinalPrice(price, discount, count),
    };
    newdata.splice(index, 0, item);
    setData(newdata);
    setEditModal(false);
  };

  const handleCancel = () => {
    setEditModal(false);
  };

  return (
    <React.Fragment>
      <button onClick={handleEdit}>
        <EditOutlined style={{ color: "green", fontSize: "1.5rem" }} />
      </button>
      <Modal
        title="Edit Item"
        visible={editModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <EditModal
          index={index}
          data={data}
          setData={setData}
          name={name}
          setName={setName}
          price={price}
          setPrice={setPrice}
          count={count}
          setCount={setCount}
          discount={discount}
          setDiscount={setDiscount}
        />
      </Modal>
    </React.Fragment>
  );
};

export default Edit;
