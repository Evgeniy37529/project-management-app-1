import React, { useState, FocusEvent, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Alert, Spin } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Login = (): JSX.Element => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [buttonActive, setButtonActive] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('language') || 'en');
  }, []);
  const entryRequest = () => {
    loader();
    axios
      .post('https://fierce-reef-60064.herokuapp.com/signin', {
        login: login,
        password: password,
      })
      .then((data) => {
        if (data.data.token) {
          localStorage.token = data.data.token;
          navigate('/boards');
        }
        loader();
      })
      .catch((err) => {
        setButtonActive(false);
        onFinishFailed();
      });
  };
  const onFinish = () => {
    entryRequest();
  };
  const onFinishFailed = () => {
    return <Alert message="Incorrect username or password entered." type="error" />;
  };
  const changeLogin = (ev: FocusEvent<HTMLInputElement>) => {
    setLogin(ev.target.value);
  };
  const changePassword = (ev: FocusEvent<HTMLInputElement>) => {
    setPassword(ev.target.value);
  };
  const loader = () => {
    setButtonActive(!buttonActive);
  };
  useEffect(() => {}, [buttonActive]);
  return (
    <Form
      style={{ marginTop: '10%' }}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 10,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label={t('signUp.login')}
        name="login"
        rules={[
          {
            required: true,
            message: `${t('signUp.input_login_message')}`,
          },
        ]}
      >
        <Input value={login} onBlur={changeLogin} />
      </Form.Item>

      <Form.Item
        label={t('signUp.password')}
        name="password"
        rules={[
          {
            required: true,
            message: `${t('signUp.input_password_message')}`,
          },
        ]}
      >
        <Input.Password value={password} onBlur={changePassword} />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>{t('signUp.remember_me')}</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {buttonActive ? (
          <Spin />
        ) : (
          <Button type="primary" htmlType="submit">
            {t('welcomPage.sign_in')}
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};
export default Login;
