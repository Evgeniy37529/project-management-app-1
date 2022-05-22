import { Button, PageHeader } from 'antd';
import { theme } from '../../utils/theme';
import { PlusCircleOutlined, SettingOutlined, ExportOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SwitcherLanguage } from '../switcherLanguage/SwitcherLanguage';
import ModalWindowCreateBoard from '../modalCreateBoards/modalCreateBoard.component';
import { useState } from 'react';

const HeaderAuthorisingUser = () => {
  const [visibleState, setVisibleState] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const exit = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const toggleModalCreated = () => {
    setVisibleState(!visibleState);
  };

  return (
    <PageHeader
      className="site-page-header-responsive"
      style={{ backgroundColor: theme.colors.whiteMatt }}
      extra={[
        <Button key="Create new board" icon={<PlusCircleOutlined />} onClick={toggleModalCreated}>
          {t('header.create_new_board')}
        </Button>,
        <Button key="login" icon={<SettingOutlined />}>
          {t('header.edit_profile')}
        </Button>,
        <Button key="sign-up" danger icon={<ExportOutlined />} onClick={exit}>
          {t('header.sign_out')}
        </Button>,
        <SwitcherLanguage key="language" />,
        <ModalWindowCreateBoard
          visible={visibleState}
          changeVisible={toggleModalCreated}
          key="modalCreateBoard"
        />
      ]}
    />
  );
};
export default HeaderAuthorisingUser;
