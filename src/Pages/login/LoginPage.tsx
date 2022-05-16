import React, { FocusEvent, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Alert, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginChange, loginUser, passwordChange } from '../../store/reducers/userReducer';

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const { login, password, status } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onFinish = () => {
    dispatch(loginUser({ login, password }));
  };
  const onFinishFailed = () => {
    return <Alert message="Incorrect username or password entered." type="error" />;
  };
  const changeLogin = (ev: FocusEvent<HTMLInputElement>) => {
    dispatch(loginChange(ev.target.value));
  };
  const changePassword = (ev: FocusEvent<HTMLInputElement>) => {
    dispatch(passwordChange(ev.target.value));
  };

  useEffect(() => {
    if (status === 'success') {
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
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
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
            Sign in
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};
export default Login;
