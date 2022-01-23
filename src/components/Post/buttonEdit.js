import React, { useState } from 'react';
import { Form, Input, Modal, Button } from 'antd';
import { connect } from 'react-redux';
import { editPost as editPostditAction } from '../../redux/modules/posts';

const ButtonEdit = ({ editPost, id }) => {
  const onSubmit = (id) => {
    editPost(id)
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };



  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit Post
      </Button>
      <Modal title="Edit Post" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <div>
      <Form
      name="basic"
      onFinish={onSubmit}
    >
      <Form.Item
        label="Title"
        name="title"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Content"
        name="body"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="userId"
        name="userId"
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button onClick={() => editPost(id)} type="primary" htmlType="submit">
          Edit
        </Button>
      </Form.Item>
    </Form>
      </div>
      </Modal>
    </>
  )
};

export default connect(
  null,
  {
    buttonEdit: editPostditAction,
  }
)(ButtonEdit);
