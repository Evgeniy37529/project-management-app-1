/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react';
import { Col, Card, Typography } from 'antd';
const { Paragraph } = Typography;
import styles from './DeveloperCard.module.css';

type DeveloperCardProps = {
  name: string;
  role: string;
  avatar: string;
};

const tabList = [
  {
    key: 'Developer',
    tab: 'Developer',
  },
  {
    key: 'Project',
    tab: 'Project',
  },
];

export const DeveloperCard: React.FC<DeveloperCardProps> = ({ name, role, avatar }) => {
  const [activeTabKey, setActiveTabKey] = useState('Developer');
  const onTabChange = (key: string) => {
    setActiveTabKey(key);
    console.log(key);
  };
  const contentList: any = {
    Developer: {
      content: (
        <div className={styles.developer}>
          <div className={styles.developerAvatar}>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      ),
    },
    Project: { content: <Paragraph className={styles.role}>{role}</Paragraph> },
  };
  return (
    <Col md={24} xs={24} sm={24} lg={8}>
      <Card
        className={styles.card}
        title={name}
        bordered={false}
        tabList={tabList}
        onTabChange={(key) => {
          onTabChange(key);
        }}
      >
        {contentList[activeTabKey].content}
      </Card>
    </Col>
  );
};
