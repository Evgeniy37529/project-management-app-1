import React from 'react';
import { Button, Switch, PageHeader } from 'antd';
import { theme } from '../../utils/theme';
import { PlusCircleOutlined, SettingOutlined, ExportOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const HeaderAuthorisingUser = () => {
  const navigate = useNavigate();
  const exit = () => {
    localStorage.clear();
    navigate('/');
  };
  return (
    <PageHeader
      className="site-page-header-responsive"
      style={{ backgroundColor: theme.colors.whiteMatt }}
      extra={[
        <Button key="Create new board" icon={<PlusCircleOutlined />}>
          Create new board
        </Button>,
        <Button key="login" icon={<SettingOutlined />}>
          Edit profile
        </Button>,
        <Button key="sign-up" danger icon={<ExportOutlined />} onClick={exit}>
          Sign Out
        </Button>,
        <Switch checkedChildren="en" unCheckedChildren="ru" defaultChecked key="language" />
      ]}
    />
  );
};
export default HeaderAuthorisingUser;
