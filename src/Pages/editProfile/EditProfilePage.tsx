import React, { useState, FocusEvent, useEffect } from 'react';
import { Button, Form, Input, Alert } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FORM_BUTTON_LAYOUT } from '../../conts/editProfileConst';

const EditProfilePage = () => {
  const [newName, setNewName] = useState('');
  const [newLogin, setNewLogin] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('language') || 'en');
  }, []);
  const changeName = (ev: FocusEvent<HTMLInputElement>) => {
    setNewName(ev.target.value);
  };
  const changeLogin = (ev: FocusEvent<HTMLInputElement>) => {
    setNewLogin(ev.target.value);
  };
  const changePassword = (ev: FocusEvent<HTMLInputElement>) => {
    setNewPassword(ev.target.value);
  };

  const navigate = useNavigate();

  const onFinish = () => {
    return <Alert message="Success Text" type="success" />;
  };
  const onFinishFailed = () => {
    return <Alert message="Incorrect username or password entered." type="error" />;
  };
  return (
    <Form
      style={{ marginTop: '10%', padding: '0 20px' }}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 10 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label={t('editProfile.name')}
        name="new name"
        rules={[{ required: true, message: `${t('editProfile.input_name_message')}` }]}
      >
        <Input value={newName} onBlur={changeName} />
      </Form.Item>

      <Form.Item
        label={t('editProfile.login')}
        name="new login"
        rules={[{ required: true, message: `${t('editProfile.input_login_message')}` }]}
      >
        <Input.Password value={newLogin} onBlur={changeLogin} />
      </Form.Item>
      <Form.Item
        label={t('editProfile.password')}
        name="new password"
        rules={[{ required: true, message: `${t('editProfile.input_password_message')}` }]}
      >
        <Input.Password value={newPassword} onBlur={changePassword} />
      </Form.Item>
      <Form.Item {...FORM_BUTTON_LAYOUT}>
        <Button
          style={{ marginRight: '10px', marginBottom: '10px' }}
          type="primary"
          htmlType="submit"
        >
          {t('editProfile.save_changes')}
        </Button>
        <Button danger type="primary">
          {t('editProfile.delete_user')}
        </Button>
      </Form.Item>
      <Form.Item {...FORM_BUTTON_LAYOUT}>
        <Button type="primary" onClick={() => navigate(-1)}>
          {t('editProfile.cancel')}
        </Button>
      </Form.Item>
    </Form>
  );
};
export default EditProfilePage;
