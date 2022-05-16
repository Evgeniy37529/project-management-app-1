import React, { useState, FocusEvent, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Alert, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  createUser,
  loginChange,
  loginUser,
  nameChange,
  passwordChange
} from '../../store/reducers/userReducer';
import { RootState } from '../../store/store';

const SignUp = () => {
  const { name, login, password, status } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeName = (ev: FocusEvent<HTMLInputElement>) => {
    dispatch(nameChange(ev.target.value));
  };
  const changeLogin = (ev: FocusEvent<HTMLInputElement>) => {
    dispatch(loginChange(ev.target.value));
  };
  const changePassword = (ev: FocusEvent<HTMLInputElement>) => {
    dispatch(passwordChange(ev.target.value));
  };

  const onFinish = async () => {
    await dispatch(createUser({ name, login, password }));
    return <Alert message="Success Text" type="success" />;
  };
  useEffect(() => {
    if (status === 'success') {
      dispatch(loginUser({ login, password }));
      navigate('/boards');
    }
  }, [status]);
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
        <Input value={name} onBlur={changeName} />
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
        <Input value={login} onBlur={changeLogin} />
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
        <Input.Password value={password} onBlur={changePassword} />
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
        {status === 'loading' ? (
          <Spin />
        ) : (
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};
export default SignUp;
