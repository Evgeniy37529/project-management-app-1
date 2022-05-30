import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Grid, PageHeader } from 'antd';
import { theme } from '../../utils/theme';
import { useTranslation } from 'react-i18next';
import { handleScroll } from './stickyFunction/stickyFunction';
import { ArrowLeftOutlined } from '@ant-design/icons';

const HeaderLoginSignUpPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const headerRef = useRef<any>(null);
  const [isSticky, setIsSticky] = useState(false);
  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();
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
        title={md && t('signUp.back_main_page')}
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
    </div>
  );
};
export default HeaderLoginSignUpPage;
