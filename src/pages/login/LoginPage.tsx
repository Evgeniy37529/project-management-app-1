import React, { FocusEvent, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Alert, Spin, Grid } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, userSlice } from '../../store/reducers/user';
import { AppDispatch, RootState } from '../../store/store';
import { userSelector } from '../../store/selectors/user';
import { FORM_BUTTON_LAYOUT } from '../../constants/editProfileConst';

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { status } = useSelector(userSelector);
  const { getUserId, defaultStatus } = userSlice.actions;
  const { t, i18n } = useTranslation();
  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('language') || 'en');
  }, [i18n]);
  const onFinish = () => {
    dispatch(loginUser({ login, password }));
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

  useEffect(() => {
    if (status === 'success') {
      navigate('/boards');
      dispatch(defaultStatus());
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
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
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
        // wrapperCol={{
        //   offset: 8,
        //   span: 16
        // }}
        {...FORM_BUTTON_LAYOUT}
      >
        {status === 'loading' ? (
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
