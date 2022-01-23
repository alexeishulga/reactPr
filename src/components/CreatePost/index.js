import React, { useState } from 'react';
import { Form, Input, Modal, Button } from 'antd';
import { connect } from 'react-redux';
import { createPost as createPostAction } from '../../redux/modules/posts';

const CreatePost = ({ createPost }) => {
  const onSubmit = (values) => {
    createPost(values)
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
        Create new Post
      </Button>
      <Modal title="New Post" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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
        <Button type="primary" htmlType="submit">
          Submit
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
    createPost: createPostAction,
  }
)(CreatePost);
