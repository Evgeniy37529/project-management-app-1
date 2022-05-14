import React, { useState } from 'react';
import { Row, Typography, Layout, Button, Select } from 'antd';
import { Page, AuthButtons, AboutProject, CardWrapper } from './styled';
import { DeveloperCard } from './Components/DeveloperCard/DeveloperCard';
import { useTranslation } from 'react-i18next';
//import i18n from '../../i18n';

const { Option } = Select;
const { Title, Paragraph } = Typography;
const { Content, Footer } = Layout;

const DEVELOPER_CARDS_INFO = [
  {
    id: 1,
    name: 'name_Dm',
    role: 'Роль в команде 1',
    avatar: require('../../assets/img/avatar.jpg'),
  },
  {
    id: 2,
    name: 'name_Dar',
    role: 'Роль в команде 2',
    avatar: require('../../assets/img/avatar.jpg'),
  },
  {
    id: 3,
    name: 'name_Ev',
    role: 'Роль в команде 3',
    avatar: require('../../assets/img/avatar.jpg'),
  },
];

export const WelcomePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const developerCardList = DEVELOPER_CARDS_INFO.map(({ id, name, role, avatar }) => (
    <DeveloperCard key={id} name={i18n.t(name)} role={role} avatar={avatar} />
  ));
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const handleChange = (value: string) => console.log(value);
  return (
    <Layout className="layout">
      <Page>
        <AuthButtons>
          <button onClick={() => changeLanguage('en')}>en</button>
          <button onClick={() => changeLanguage('ru')}>de</button>
          <Button style={{ marginRight: '10px' }} type="primary" ghost>
            Log In
          </Button>
          <Button type="primary" ghost>
            Sign Up
          </Button>
          <Select defaultValue={'en'} style={{ width: 120 }} onChange={changeLanguage}>
            <Option value="en">en</Option>
            <Option value="ru">ru</Option>
          </Select>
        </AuthButtons>
        <Content className="container">
          <AboutProject>
            <Title style={{ fontSize: 'calc(1rem + 2vw)', textAlign: 'center' }} level={1}>
              {t('about_project_title')}
            </Title>
            <Paragraph style={{ fontSize: 'calc(1rem + 1vw)', textAlign: 'center' }}>
              {t('about_project')}
            </Paragraph>
          </AboutProject>
          <div>
            <Title style={{ fontSize: 'calc(1rem + 2vw)', textAlign: 'center' }} level={2}>
              {t('team')}
            </Title>
            <CardWrapper>
              <Row
                gutter={[
                  { xs: 0, sm: 0, md: 16, lg: 16 },
                  { xs: 16, sm: 16, md: 0, lg: 0 },
                ]}
              >
                {developerCardList}
              </Row>
            </CardWrapper>
          </div>
        </Content>
      </Page>
      <Footer
        style={{
          paddingTop: '10px',
          paddingBottom: '10px',
          background: '#eee7e779',
          boxShadow: '0 0 5px 0px rgb(1, 1, 1), inset 0 0 15px 0px rgb(1, 1, 1)',
        }}
      >
        тут будет футер
      </Footer>
    </Layout>
  );
};
