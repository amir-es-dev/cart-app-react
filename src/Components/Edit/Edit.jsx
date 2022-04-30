import { EditOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import Panel from "../Panel/Panel";

const Edit = ({ selectedItem, data, setData }) => {
  const [editModal, setEditModal] = useState();

  console.log("edit rendered");
  console.log("editModal= ", editModal);

  const handleEdit = () => {
    setEditModal(selectedItem);
  };

  const handleCancel = () => {
    setEditModal();
  };

  return (
    <React.Fragment>
      <button onClick={handleEdit}>
        <EditOutlined style={{ color: "green", fontSize: "1.5rem" }} />
      </button>
      <Modal
        destroyOnClose={true}
        title="Edit Products"
        visible={editModal}
        onCancel={handleCancel}
        footer={null}
      >
        <Panel
          data={data}
          setData={setData}
          editModal={editModal}
          setEditModal={setEditModal}
        />
      </Modal>
    </React.Fragment>
  );
};

export default Edit;
