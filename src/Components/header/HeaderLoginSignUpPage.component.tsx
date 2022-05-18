import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, PageHeader } from 'antd';
import { theme } from '../../utils/theme';
import { useTranslation } from 'react-i18next';
import { handleScroll } from './stickyFunction/stickyFunction';

const HeaderLoginSignUpPage = () => {
  const headerRef = useRef<any>(null);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, setIsSticky);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <div ref={headerRef} className={`${isSticky ? 'sticky' : ''}`}>
      <PageHeader
        className="site-page-header-responsive"
        onBack={() => navigate('/')}
        title={t('signUp.back_main_page')}
        style={{
          backgroundColor: theme.colors.whiteMatt,
          boxShadow: isSticky ? '0 0 12px 5px #444140' : 'none',
          transition: 'all 0.5s ease'
        }}
        extra={[
          <Link to="/login" key="login-link">
            <Button key="login">{t('welcomPage.sign_in')}</Button>
          </Link>,
          <Link to="/sign-up" key="sign-up-link">
            <Button key="sign-up">{t('welcomPage.sign_up')}</Button>
          </Link>
        ]}
      />
    </div>
  );
};
export default HeaderLoginSignUpPage;
