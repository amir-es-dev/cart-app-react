import { DeleteOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";

const Delete = ({ index, data, setData }) => {
  const [delModal, setDelModal] = useState(false);

  const handleDelete = () => {
    setDelModal(true);
  };

  const handleOk = () => {
    const newdata = data.filter((item, i) => i !== index);
    setData(newdata);
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
