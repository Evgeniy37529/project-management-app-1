import { Button, PageHeader } from 'antd';
import { theme } from '../../utils/theme';
import { PlusCircleOutlined, SettingOutlined, ExportOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SwitcherLanguage } from '../switcherLanguage/SwitcherLanguage';
import { useEffect, useRef, useState } from 'react';
import { handleScroll } from './stickyFunction/stickyFunction';

const HeaderAuthorisingUser = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<any>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const exit = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  const goToEditProfile = () => navigate('/change-profile');
  const goToEditProfile = () => navigate('/change-profile');

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
        className={`site-page-header-responsive`}
        style={{
          backgroundColor: theme.colors.whiteMatt,
          boxShadow: isSticky ? '0 0 12px 5px #444140' : 'none',
          transition: 'all 0.5s ease'
        }}
        extra={[
          <Button key="Create new board" icon={<PlusCircleOutlined />}>
            {t('header.create_new_board')}
          </Button>,
          <Button key="login" icon={<SettingOutlined />} onClick={goToEditProfile}>
            {t('header.edit_profile')}
          </Button>,
          <Button key="sign-up" danger icon={<ExportOutlined />} onClick={exit}>
            {t('header.sign_out')}
          </Button>,
          <SwitcherLanguage key="language" />
        ]}
      />
    </div>
  );
};
export default HeaderAuthorisingUser;
