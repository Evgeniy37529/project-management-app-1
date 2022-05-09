import React from 'react';
import { Button, PageHeader } from 'antd';
import { theme } from '../../utils/theme';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <PageHeader
      className="site-page-header-responsive"
      onBack={() => window.history.back()}
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
export default Header;
