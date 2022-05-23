import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, PageHeader } from 'antd';
import { theme } from '../../utils/theme';
import { useTranslation } from 'react-i18next';

const HeaderLoginSignUpPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <PageHeader
      className="site-page-header-responsive"
      onBack={() => navigate('/')}
      title={t('signUp.back_main_page')}
      style={{ backgroundColor: theme.colors.whiteMatt }}
      extra={[
        <Link to="/login" key="login-link">
          <Button key="login">{t('welcomPage.sign_in')}</Button>
        </Link>,
        <Link to="/sign-up" key="sign-up-link">
          <Button key="sign-up">{t('welcomPage.sign_up')}</Button>
        </Link>
      ]}
    />
  );
};
export default HeaderLoginSignUpPage;
