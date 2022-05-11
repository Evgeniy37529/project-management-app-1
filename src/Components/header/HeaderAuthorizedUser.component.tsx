import React from 'react';
import { Button, Switch, PageHeader } from 'antd';
import { theme } from '../../utils/theme';
import { PlusCircleOutlined, SettingOutlined } from '@ant-design/icons';

const HeaderAuthorisingUser = () => {
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
        <Button key="sign-up" danger>
          Sign Out
        </Button>,
        <Switch checkedChildren="en" unCheckedChildren="ru" defaultChecked key="language" />
      ]}
    />
  );
};
export default HeaderAuthorisingUser;
