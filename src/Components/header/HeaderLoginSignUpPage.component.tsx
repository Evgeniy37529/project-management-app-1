import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, PageHeader } from 'antd';
import { theme } from '../../utils/theme';

const HeaderLoginSignUpPage = () => {
  const navigate = useNavigate();
  return (
    <PageHeader
      className="site-page-header-responsive"
      onBack={() => navigate('/')}
      title="Вернуться на главную"
      style={{ backgroundColor: theme.colors.whiteMatt }}
      extra={[
        <Link to="/login" key="login-link">
          <Button key="login">Login</Button>
        </Link>,
        <Link to="/sign-up" key="sign-up-link">
          <Button key="sign-up">Sign up</Button>
        </Link>
      ]}
    />
  );
};
export default HeaderLoginSignUpPage;
