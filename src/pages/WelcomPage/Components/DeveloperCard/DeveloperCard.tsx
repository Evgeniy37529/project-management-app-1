import React, { useState } from 'react';
import { Col, Card, Typography } from 'antd';
const { Paragraph } = Typography;
import { AvatarImage, Developer, DeveloperAvatar } from './styled';
import { useTranslation } from 'react-i18next';

type DeveloperCardProps = {
  name: string;
  role: string;
  avatar: string;
};

export const DeveloperCard: React.FC<DeveloperCardProps> = ({ name, role, avatar }) => {
  const [activeTabKey, setActiveTabKey] = useState('Developer');
  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };
  const contentList: any = {
    Developer: {
      content: (
        <Developer>
          <DeveloperAvatar>
            <AvatarImage src={avatar} alt="avatar" />
          </DeveloperAvatar>
        </Developer>
      )
    },
    Project: {
      content: <Paragraph style={{ fontSize: '20px' }}>{role}</Paragraph>
    }
  };
  const { t } = useTranslation();

  return (
    <Col md={24} xs={24} sm={24} lg={8}>
      <Card
        style={{
          background: '#ffffff72',
          borderRadius: '20px',
          minHeight: '400px',
          overflowY: 'auto'
        }}
        title={name}
        bordered={false}
        tabList={[
          {
            key: 'Developer',
            tab: t('welcomPage.developer')
          },
          {
            key: 'Project',
            tab: t('welcomPage.project')
          }
        ]}
        onTabChange={(key) => {
          onTabChange(key);
        }}
      >
        {contentList[activeTabKey].content}
      </Card>
    </Col>
  );
};
