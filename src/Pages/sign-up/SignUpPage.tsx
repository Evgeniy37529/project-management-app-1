import React, { useState, FocusEvent, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Alert, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, loginUser } from '../../store/reducers/userReducer';
import { AppDispatch, RootState } from '../../store/store';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { status } = useSelector((state: RootState) => state.user);
  const { t, i18n } = useTranslation();
  const changeName = (ev: FocusEvent<HTMLInputElement>) => {
    setName(ev.target.value);
  };
  const changeLogin = (ev: FocusEvent<HTMLInputElement>) => {
    setLogin(ev.target.value);
  };
  const changePassword = (ev: FocusEvent<HTMLInputElement>) => {
    setPassword(ev.target.value);
  };

  const onFinish = () => {
    try {
      dispatch(createUser({ name, login, password }));
      return <Alert message="Success Text" type="success" />;
    } catch (err) {}
  };

  useEffect(() => {
    if (status === 'success') {
      dispatch(loginUser({ login, password }));
      navigate('/boards');
    }
  }, [status]);
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('language') || 'en');
  }, []);
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
      autoComplete="off"
    >
      <Form.Item
        label={t('signUp.name')}
        name="name"
        rules={[
          {
            required: true,
            message: `${t('signUp.input_name_message')}`,
          },
        ]}
      >
        <Input value={name} onBlur={changeName} />
      </Form.Item>
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
        {status === 'loading' ? (
          <Spin />
        ) : (
          <Button type="primary" htmlType="submit">
            {t('welcomPage.sign_up')}
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};
export default SignUp;
