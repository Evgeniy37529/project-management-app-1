/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { Row, Typography, Layout, Button } from 'antd';
import styles from './welcomPage.module.css';
import { DeveloperCard } from './Components/DeveloperCard/DeveloperCard';

const { Title, Paragraph } = Typography;
const { Content, Footer } = Layout;

const DeveloperCardsInfo = [
  {
    id: 1,
    name: 'Дмитрий',
    role: 'Роль в команде 1',
    avatar: require('../../../assets/img/avatar.jpg'),
  },
  {
    id: 2,
    name: 'Дарья',
    role: 'Роль в команде 2',
    avatar: require('../../../assets/img/avatar.jpg'),
  },
  {
    id: 3,
    name: 'Евгений',
    role: 'Роль в команде 3',
    avatar: require('../../../assets/img/avatar.jpg'),
  },
];

export const WelcomPage: React.FC = () => {
  const developerСardList = DeveloperCardsInfo.map(({ id, name, role, avatar }) => (
    <DeveloperCard key={id} name={name} role={role} avatar={avatar} />
  ));
  return (
    <Layout className="layout">
      <div className={styles.welcomPage}>
        <div className={styles.auth}>
          <Button className={styles.logIn} type="primary" ghost>
            Log In
          </Button>
          <Button className={styles.signUp} type="primary" ghost>
            Sign Up
          </Button>
        </div>
        <Content className="container">
          <div className={styles.aboutProject}>
            <Title className={styles.title} level={1}>
              О проекте
            </Title>
            <Paragraph className={styles.paragraph}>
              Проект создан командой разработчиков RS School в рамка финального задания
              &quot;Система управления проектами&quot;. Приложение позволит команде организовать и
              структурировать процесс разработки, выполняя поставленные задачи.
            </Paragraph>
          </div>
          <div>
            <Title className={styles.title} level={2}>
              Команда
            </Title>
            <div className={styles.cardWrapper}>
              <Row
                gutter={[
                  { xs: 0, sm: 0, md: 16, lg: 16 },
                  { xs: 16, sm: 16, md: 0, lg: 0 },
                ]}
              >
                {developerСardList}
              </Row>
            </div>
          </div>
        </Content>
      </div>
      <Footer className={styles.footer}>тут будет футер</Footer>
    </Layout>
  );
};
