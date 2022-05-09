import React from 'react';
import { Button, Checkbox, Form, Input, Alert } from 'antd';
import axios from 'axios';

const SignUp = () => {
  const onFinish = () => {
    return <Alert message="Success Text" type="success" />;
  };
  const onFinishFailed = () => {
    return <Alert message="Incorrect username or password entered." type="error" />;
  };
  return (
    <Form
      style={{ marginTop: '10%' }}
      name="basic"
      labelCol={{
        span: 8
      }}
      wrapperCol={{
        span: 10
      }}
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Login"
        name="login"
        rules={[
          {
            required: true,
            message: 'Please input your login!'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Button type="primary" htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SignUp;
