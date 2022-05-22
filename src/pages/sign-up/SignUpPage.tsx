import React, { useState, FocusEvent, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, loginUser } from '../../store/reducers/user';
import { AppDispatch, RootState } from '../../store/store';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<{ name: string; login: string; password: string }>({
    name: '',
    login: '',
    password: ''
  });
  const { status } = useSelector((state: RootState) => state.user);
  const { t, i18n } = useTranslation();
  const changeUserInfo = (ev: FocusEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [ev.target.name]: ev.target.value });
  };

  const onFinish = () => {
    try {
      dispatch(createUser(userInfo));
    } catch (err) {}
  };

  useEffect(() => {
    if (status === 'success') {
      dispatch(loginUser({ login: userInfo.login, password: userInfo.password }));
      navigate('/boards');
    }
  }, [status, dispatch, navigate]);
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('language') || 'en');
  }, [i18n]);
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
        label={t('signUp.name')}
        rules={[
          {
            required: true,
            message: `${t('signUp.input_name_message')}`
          }
        ]}
      >
        <Input name="name" onBlur={changeUserInfo} />
      </Form.Item>
      <Form.Item
        label={t('signUp.login')}
        rules={[
          {
            required: true,
            message: `${t('signUp.input_login_message')}`
          }
        ]}
      >
        <Input name="login" onBlur={changeUserInfo} />
      </Form.Item>

      <Form.Item
        label={t('signUp.password')}
        rules={[
          {
            required: true,
            message: `${t('signUp.input_password_message')}`
          }
        ]}
      >
        <Input.Password name="password" onBlur={changeUserInfo} />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Checkbox>{t('signUp.remember_me')}</Checkbox>
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
            {t('welcomPage.sign_up')}
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};
export default SignUp;
