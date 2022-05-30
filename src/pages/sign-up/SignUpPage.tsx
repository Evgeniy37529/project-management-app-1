import React, { useState, FocusEvent, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Alert, Spin, Grid } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { createUser, loginUser } from '../../store/reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { userSelector } from '../../store/selectors/user';
import WarningModal from './signUpModal';
import { stat } from 'fs';
import { FORM_BUTTON_LAYOUT } from '../../constants/editProfileConst';

const SignUp = () => {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { status } = useSelector(userSelector);
  const navigate = useNavigate();
  const [isShowError, setIsShowError] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { t, i18n } = useTranslation();
  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();
  const changeName = (ev: FocusEvent<HTMLInputElement>) => {
    setName(ev.target.value);
  };
  const changeLogin = (ev: FocusEvent<HTMLInputElement>) => {
    setLogin(ev.target.value);
  };
  const changePassword = (ev: FocusEvent<HTMLInputElement>) => {
    setPassword(ev.target.value);
  };

  const createAccount = () => {
    dispatch(createUser({ name, login, password })).then(() => {
      if (!isShowError) {
        dispatch(loginUser({ login, password })).then(() => {
          if (!isShowError) {
            navigate('/boards');
          }
        });
      }
    });
  };
  const onFinish = () => {
    createAccount();
  };
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('language') || 'en');
  }, []);
  useEffect(() => {
    if (status === 'error') {
      setIsShowError(true);
      setTimeout(() => {
        setIsShowError(false);
      }, 3000);
    }
  }, [status, navigate]);
  return (
    <Form
      style={{ marginTop: '10%', padding: !md ? '10px' : 0 }}
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
        name="name"
        rules={[
          {
            required: true,
            message: `${t('signUp.input_name_message')}`
          }
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
            message: `${t('signUp.input_login_message')}`
          }
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
            message: `${t('signUp.input_password_message')}`
          }
        ]}
      >
        <Input.Password value={password} onBlur={changePassword} />
      </Form.Item>

      <Form.Item
        {...FORM_BUTTON_LAYOUT}
        name="remember"
        valuePropName="checked"
        // wrapperCol={{
        //   offset: 8,
        //   span: 8
        // }}
      >
        <Checkbox>{t('signUp.remember_me')}</Checkbox>
      </Form.Item>

      <Form.Item
        {...FORM_BUTTON_LAYOUT}
        // wrapperCol={{
        //   offset: 8,
        //   span: 16
        // }}
      >
        {status === 'loading' ? (
          <Spin />
        ) : (
          <Button type="primary" htmlType="submit">
            {t('welcomPage.sign_up')}
          </Button>
        )}
      </Form.Item>
      {isShowError ? <WarningModal message="Такой пользователь уже существует" /> : null}
    </Form>
  );
};
export default SignUp;
