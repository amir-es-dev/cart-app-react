import { DeleteOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";

const Delete = ({ selectedItem, data, setData }) => {
  const [delModal, setDelModal] = useState(false);

  console.log("delete rendered");
  console.log("delModal= ", delModal);

  const handleDelete = () => {
    setDelModal(true);
  };

  const handleOk = () => {
    const newdata = data.filter((product) => product.id !== selectedItem.id);
    setData(newdata);
    localStorage.setItem("data", JSON.stringify(newdata));
    setDelModal(false);
  };

  const handleCancel = () => {
    setDelModal(false);
  };

  return (
    <React.Fragment>
      <button onClick={handleDelete}>
        <DeleteOutlined style={{ color: "red", fontSize: "1.5rem" }} />
      </button>
      <Modal
        title="Delete Item"
        visible={delModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Do you want to delete this item?
      </Modal>
    </React.Fragment>
  );
};

export default Delete;
