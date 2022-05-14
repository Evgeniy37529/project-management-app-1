import React from 'react';
import { Row, Typography, Layout, Button } from 'antd';
import { Page, AuthButtons, AboutProject, CardWrapper } from './styled';
import { DeveloperCard } from './Components/DeveloperCard/DeveloperCard';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;
const { Content, Footer } = Layout;

const DEVELOPER_CARDS_INFO = [
  {
    id: 1,
    name: 'Дмитрий',
    role: 'Роль в команде 1',
    avatar: require('../../assets/img/avatar.jpg'),
  },
  {
    id: 2,
    name: 'Дарья',
    role: 'Роль в команде 2',
    avatar: require('../../assets/img/avatar.jpg'),
  },
  {
    id: 3,
    name: 'Евгений',
    role: 'Роль в команде 3',
    avatar: require('../../assets/img/avatar.jpg'),
  },

];

export const WelcomePage: React.FC = () => {
  const developerCardList = DEVELOPER_CARDS_INFO.map(({ id, name, role, avatar }) => (
    <DeveloperCard key={id} name={name} role={role} avatar={avatar} />
  ));

  return (
    <Layout className="layout">
      <Page>
        <AuthButtons>

          <Link to="/login">
            <Button style={{ marginRight: '10px' }} type="primary" ghost>
              Log In
            </Button>
          </Link>
          <Link to="/sign-up">
            <Button type="primary" ghost>
              Sign Up
            </Button>
          </Link>
        </AuthButtons>
        <Content className="container">
          <AboutProject>
            <Title style={{ fontSize: 'calc(1rem + 2vw)', textAlign: 'center' }} level={1}>
              О проекте
            </Title>
            <Paragraph style={{ fontSize: 'calc(1rem + 1vw)', textAlign: 'center' }}>
              Проект создан командой разработчиков RS School в рамка финального задания
              &quot;Система управления проектами&quot;. Приложение позволит команде организовать и
              структурировать процесс разработки, выполняя поставленные задачи.
            </Paragraph>
          </AboutProject>
          <div>
            <Title style={{ fontSize: 'calc(1rem + 2vw)', textAlign: 'center' }} level={2}>
              Команда
            </Title>
            <CardWrapper>
              <Row
                gutter={[
                  { xs: 0, sm: 0, md: 16, lg: 16 },
                  { xs: 16, sm: 16, md: 0, lg: 0 }

                ]}
              >
                {developerCardList}
              </Row>
            </CardWrapper>
          </div>
        </Content>
      </Page>
    </Layout>
  );
};
