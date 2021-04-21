import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Image } from 'antd';
import { Modal, Button } from 'antd';
import Register from './Register';


const Header = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (id) => {
    setIsModalVisible(true);
  };

  const handleOk = (id) => {
    setIsModalVisible(false);
  };

  const handleCancel = (id) => {
    setIsModalVisible(false);
  };
  return (
    <Row className='content1'>
      <Col span={2}>
        <Image
          width={100}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Col>
      <Col span={14}>col-8</Col>
      <Col span={8}>
        <div>
          <Button type="primary" onClick={showModal}>
            Đăng Kí/Đăng Nhập
          </Button>
          <Modal title="Đăng Kí/Đăng Nhập" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Register />
          </Modal>
        </div>
      </Col>
    </Row>
  );

}


export default Header;