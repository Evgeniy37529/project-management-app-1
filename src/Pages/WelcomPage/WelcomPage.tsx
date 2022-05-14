import React from 'react';
import { Row, Typography, Layout, Button, Select } from 'antd';
import { Page, AuthButtons, AboutProject, CardWrapper } from './styled';
import { DeveloperCard } from './Components/DeveloperCard/DeveloperCard';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { locationSlice } from '../../app/locationSlice/locationSlice';

const { Option } = Select;
const { Title, Paragraph } = Typography;
const { Content, Footer } = Layout;

const DEVELOPER_CARDS_INFO = [
  {
    id: 1,
    name: 'welcomPage.name_Dm',
    role: 'welcomPage.role_in_team_1',
    avatar: require('../../assets/img/avatar.jpg'),
  },
  {
    id: 2,
    name: 'welcomPage.name_Dar',
    role: 'welcomPage.role_in_team_1',
    avatar: require('../../assets/img/avatar.jpg'),
  },
  {
    id: 3,
    name: 'welcomPage.name_Ev',
    role: 'welcomPage.role_in_team_1',
    avatar: require('../../assets/img/avatar.jpg'),
  },
];

export const WelcomePage: React.FC = () => {
  const { lang } = useAppSelector((state) => state.location);
  const { setLang } = locationSlice.actions;
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    dispatch(setLang(language));
  };
  const developerCardList = DEVELOPER_CARDS_INFO.map(({ id, name, role, avatar }) => (
    <DeveloperCard key={id} name={i18n.t(name)} role={i18n.t(role)} avatar={avatar} />
  ));

  return (
    <Layout className="layout">
      <Page>
        <AuthButtons>
          <Button style={{ marginRight: '10px' }} type="primary" ghost>
            {t('welcomPage.sign_in')}
          </Button>
          <Button type="primary" ghost>
            {t('welcomPage.sign_up')}
          </Button>
          <Select value={lang} style={{ width: 120 }} onChange={changeLanguage}>
            <Option value="en">en</Option>
            <Option value="ru">ru</Option>
          </Select>
        </AuthButtons>
        <Content className="container">
          <AboutProject>
            <Title style={{ fontSize: 'calc(1rem + 2vw)', textAlign: 'center' }} level={1}>
              {t('welcomPage.about_project_title')}
            </Title>
            <Paragraph style={{ fontSize: 'calc(1rem + 1vw)', textAlign: 'center' }}>
              {t('welcomPage.about_project')}
            </Paragraph>
          </AboutProject>
          <div>
            <Title style={{ fontSize: 'calc(1rem + 2vw)', textAlign: 'center' }} level={2}>
              {t('welcomPage.team')}
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
