import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, PageHeader } from 'antd';
import { theme } from '../../utils/theme';
import { Link } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  return (
    <PageHeader
      className="site-page-header-responsive"
      onBack={() => navigate('/home')}
      title="Вернуться на главную"
      style={{ backgroundColor: theme.colors.whiteMatt }}
      extra={[
        <Link to="/login" key="login-link">
          <Button key="login">Login</Button>
        </Link>,
        <Link to="/sign-up" key="sign-up-link">
          <Button key="sign-up">Sign up</Button>
        </Link>,
      ]}
    />
  );
};
export default Header;
